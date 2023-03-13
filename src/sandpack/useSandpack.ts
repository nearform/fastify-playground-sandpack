import { useCallback, useEffect, useState } from 'react'
import { useSandpack as useSandpackReact } from '@codesandbox/sandpack-react'
import type { SandpackMessage } from '@codesandbox/sandpack-client'

interface SandpackHook {
  activeFileIsReadme: boolean
  restartOnChange: boolean
  restartShell: () => void
  toggleRestartOnChange: () => void
}

export default function useSandpack(): SandpackHook {
  const { dispatch, listen, sandpack } = useSandpackReact()
  const [restartOnChange, setRestartOnChange] = useState<boolean>(true)

  const activeFileIsReadme = sandpack?.activeFile === '/README.md'

  const restartShell = useCallback(
    () => dispatch({ type: 'shell/restart' }),
    [dispatch]
  )

  const toggleRestartOnChange = () => {
    if (!restartOnChange) restartShell()
    setRestartOnChange(prev => !prev)
  }

  useEffect(() => {
    const handleMessage = (msg: SandpackMessage) => {
      const indexHasChanged =
        msg.type === 'fs/change' && msg.path === '/index.js'

      if (restartOnChange && indexHasChanged) restartShell()
    }

    const unsubscribe = listen(handleMessage)

    return () => {
      unsubscribe()
    }
  }, [listen, restartOnChange, restartShell])

  return {
    activeFileIsReadme,
    restartOnChange,
    restartShell,
    toggleRestartOnChange
  }
}
