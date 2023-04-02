# `Hello World` App Evolution
This repository will take you through the evolution of a basic hello-world application that incorporates React for the frontend (`/web`) and Express.js for the API (`/api`). Initially, the application follows a conventional React and Express.js architecture, but gradually evolves into an independent component architecture.

As you progress through the different stages of the transition, you'll find the code in corresponding branch in this repository.

## Pre-Bit
**Example:** [Code](https://github.com/teambit-community/hello-world/tree/pre-bit)

This branch contains a classical React frontend and an Express.js API. They are deployed to Netlify and to a Virtual Machine using SSH.

```
- web
  - src
    - app
    - hooks
      - use-hello-world
    - ui
      - button
      - heading
- api
  - src
    - index
  - routes
      - hello
- .github
  - workflows
    - main.yml
- netlify.toml
- _redirects
```

### Running Locally
Run React App: Go to `/web` directory and execute `npm run start` command. 
Run Express.js API: Go to `/api` directory and execute `npm run start` command.

## Bit-Init
**Example:** [Code](https://github.com/teambit-community/hello-world/tree/bit-init)

## Initializing Bit Workspace
First at the project root directory, `bit init` command is used and workspace.json was updated to use:
1. `greeters` for the workspace.
2. `hello-world` for the default scope.

## Restructuring the `Web` project

The `web` project is restructured to:
1. The `hooks` and `ui` components are moved back to `web/` directory.
2. The `web/src` directory is renamed to `app` which contains the React app component.

The `api` project is restructured to:
1. The `routes` components are moved back to `api/` directory.
2. The `api/src` directory is renamed to `app` which contains the Node app component.

