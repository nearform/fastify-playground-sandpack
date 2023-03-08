import SandpackEditor from './sandpack'
import { SandpackProvider } from '@codesandbox/sandpack-react'

import fastifyIndexRaw from './fastify/index?raw'
import fastifyPackageJsonRaw from './fastify/package.json?raw'
import readmeRaw from './fastify/README.md?raw'

import logoUrl from './assets/logo.png'

export default function () {
  return (
    <>
      <header>
        <h1>
          <img alt="NearForm Logo" height={26} src={logoUrl} />
          &nbsp;&nbsp;&nbsp;Fastify Playground
        </h1>
      </header>

      <SandpackProvider
        files={{
          '/index.js': fastifyIndexRaw,
          '/package.json': fastifyPackageJsonRaw,
          '/README.md': {
            code: readmeRaw,
            readOnly: true
          }
        }}
        template="node"
      >
        <SandpackEditor />
      </SandpackProvider>

      <footer>© Copyright 2019-2023 NearForm Ltd.</footer>
    </>
  )
}
