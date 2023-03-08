![CI](https://github.com/nearform/hub-template/actions/workflows/ci.yml/badge.svg?event=push)

# Fastify playground

An interactive playground for running Fastify in the browser using Sandpack.

[Example](https://nearform.github.io/fastify-playground-sandpack)

## Blog post

[Link](/#todo)

## Requirements

- Node LTS

## Local setup

- `npm i`
- `npm run dev`

## Repository features

- Vite React application with Typescript
- Code linting with [ESlint](https://eslint.org) and [prettier](https://prettier.io)
- Pre-commit code linting and commit message linting with [husky](https://www.npmjs.com/package/husky) and [commitlint](https://commitlint.js.org/)
- Dependabot setup with automatic merging thanks to ["merge dependabot" GitHub action](https://github.com/fastify/github-action-merge-dependabot)
- Notifications about commits waiting to be released thanks to ["notify release" GitHub action](https://github.com/nearform/github-action-notify-release)
- PRs' linked issues check with ["check linked issues" GitHub action](https://github.com/nearform/github-action-check-linked-issues)
- Continuous Integration GitHub workflow
