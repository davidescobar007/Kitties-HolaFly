# About this project:
it is build under morepo arquitecture with Lerna, using nodejs with express for backend and React with Typescript and Vite for frontend.

## NOTE:
Need to have Docker installed in your machine

## Steps to run project:

### NOTE: If not Docker installed in your machines, then please run following command at the root of project:
`npm run dev`

1. build Docker image of project, run following command:
   `docker build -t kittens .`

2. run Docker image with following command:
   `docker run -it --rm -p 5000:5000 -p 3000:5173 kittens`
