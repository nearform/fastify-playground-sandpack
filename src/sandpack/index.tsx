import {
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor
} from '@codesandbox/sandpack-react'

import useSandpack from './useSandpack'

export default function () {
  const {
    activeFileIsReadme,
    restartOnChange,
    restartShell,
    toggleRestartOnChange
  } = useSandpack()

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
          showInlineErrors={true}
          showLineNumbers={!activeFileIsReadme}
          showTabs={true}
          wrapContent={activeFileIsReadme}
        />
        <SandpackPreview showNavigator />
      </SandpackLayout>
    </>
  )
}
