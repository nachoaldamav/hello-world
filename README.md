# "Hello World" App Evolution
This repository will take you through the evolution of a basic hello-world application that incorporates React for the frontend (`/web`) and Express.js for the API (`/api`). Initially, the application follows a conventional React and Express.js architecture, but gradually evolves into an independent component architecture.

As you progress through the different stages of the transition, you'll find corresponding branches with the prefix `stage`.

## Stage 1: Simple App
View Code: [branch](https://github.com/teambit-community/hello-world/tree/stage1-simple_app)

Run React App: Go to `/web` directory and execute `npm run start` command. 
Run Express.js API: Go to `/api` directory and execute `npm run start` command.

## Stage 2: Consuming the API
View Code: [branch](https://github.com/teambit-community/hello-world/tree/stage2-consuming_api)

Run React App: Go to `/web` directory and execute `npm run start` command. 
Run Express.js API: Go to `/api` directory and execute `npm run start` command.

## Stage 3: Build & Deploy
View Code: [branch](https://github.com/teambit-community/hello-world/tree/stage3-build_and_deploy)

In this stage, you can see two new files at the root. 

1. `netlify.toml` - Provides the configuration to deploy the frontend into Netlify
2. `.github/workflows/main.yml` - Provides the configuration to deploy the API to a virtual machine by connecting via SSH.

Run React App: Go to `/web` directory and execute `npm run start` command. 
Run Express.js API: Go to `/api` directory and execute `npm run start` command.
