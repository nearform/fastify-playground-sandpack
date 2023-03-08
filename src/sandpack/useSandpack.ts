import { useCallback, useEffect, useState } from 'react'
import { useSandpack } from '@codesandbox/sandpack-react'

export default function () {
  const { dispatch, listen, sandpack } = useSandpack()
  const [restartOnChange, setRestartOnChange] = useState<boolean>(true)

  const restartShell = useCallback(
    () => dispatch({ type: 'shell/restart' }),
    [dispatch]
  )

  const toggleRestartOnChange = () => {
    if (!restartOnChange) restartShell()
    setRestartOnChange(!restartOnChange)
  }

  useEffect(() => {
    const restart = listen(msg => {
      if (
        restartOnChange &&
        msg?.type === 'fs/change' &&
        msg?.path === '/index.js'
      )
        restartShell()
    })

    return () => {
      restart()
    }
  }, [listen, restartOnChange, restartShell])

  return {
    activeFile: sandpack?.activeFile,
    restartOnChange,
    restartShell,
    toggleRestartOnChange
  }
}
