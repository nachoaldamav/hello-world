# "Hello World" App Evolution
This repository will take you through the evolution of a basic hello-world application that incorporates React for the frontend (`/web`) and Express.js for the API (`/api`). Initially, the application follows a conventional React and Express.js architecture, but gradually evolves into an independent component architecture.

As you progress through the different stages of the transition, you'll find the code in corresponding branch in this repository.

## Pre-Bit
View Code: [branch](https://github.com/teambit-community/hello-world/tree/pre-bit)

This branch contains a classical React frontend and an Express.js API. They are deployed to Netlify and to a Virtual Machine using SSH. You can find the deployment configuration in:

1. `netlify.toml` - To deploy the frontend into Netlify.
2. `.github/workflows/main.yml` - To deploy the API to a virtual machine via SSH.

**Note:** Make sure that you properly set up the environment variables for both the frontend and API.

### Running Locally
Run React App: Go to `/web` directory and execute `npm run start` command. 
Run Express.js API: Go to `/api` directory and execute `npm run start` command.
