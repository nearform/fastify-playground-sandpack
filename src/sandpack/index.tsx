import {
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor
} from '@codesandbox/sandpack-react'

import useSandpack from './useSandpack'

export default function () {
  const { activeFile, restartOnChange, restartShell, toggleRestartOnChange } =
    useSandpack()

  return (
    <>
      <section>
        <label htmlFor="restartOnChange">
          Listen to changes
          <input
            id="restartOnChange"
            type="checkbox"
            checked={restartOnChange}
            onChange={toggleRestartOnChange}
          />
        </label>
        <button onClick={restartShell}>Restart shell</button>
      </section>

      <SandpackLayout>
        <SandpackCodeEditor
          closableTabs={false}
          showInlineErrors
          showLineNumbers={true}
          showTabs
          wrapContent={activeFile === '/README.md'}
        />
        <SandpackPreview showNavigator />
      </SandpackLayout>
    </>
  )
}
