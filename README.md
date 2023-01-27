# About this project:

It is build under morepo arquitecture with Lerna, using nodejs with express for backend and React with Typescript and Vite for frontend.

Some of the libraries and/or Tools used in this project:

- React Router
- Redux
- Redux tool kit query
- Tailwind
- DaisyUI
- Eslint and Prettier
- Framer
- Vitest

## NOTE:

Need to have Docker installed in your machine

### NOTE: If not Docker installed in your machine, then please run following commands at the root of project and avoid Docker steps:

### Steps to run project:

**If Docker is installed, jump to 'Run with Docker'**

- `npx lerna bootstrap --hoist` - it will install packages and dependecies for client and server at once at the main node_modules.
- `npm run lerna-clean` - it will clean node_modules for both packages and only node_modules at root of project will be left
- `npm run dev` - it will run de client and server at the same time and you will be able to serve at ports:
  - client: **http://localhost:5173**
  - server: **http://localhost:5000/**

### Run with Docker

1. build Docker image of project, run following command:
   `docker build -t kittens .`

2. run Docker image with following command:
   `docker run -it --rm -p 5000:5000 -p 3000:5173 kittens`

3. With image running, server and client at ports:
   - client: **http://localhost:3000**
   - server: **http://localhost:5000/**
