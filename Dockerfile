# This is the base dockerfile. Here the base image is pulled and the ras setup is done for the project.
# Make sure to include the base setup for lerna here.
FROM node:18 as base
WORKDIR /app
COPY . .
RUN npm install
COPY ./lerna.json ./
# Package client
FROM base as client-build
WORKDIR /app/packages/client
# Here the dependencies will be installed and the local required packages bootstrapped.
# The --slim flag will cause the package json to only include the dependencies, so not all changes to the package json cause docker to reinstall all packages.
COPY  packages/client/package-slim.json package.json
WORKDIR /app/
RUN npx lerna bootstrap --scope=client --includeDependencies
WORKDIR /app/packages/client
# The normal package.json should be copied after the install into the container
COPY  packages/client/package.json ./
# This will only add the command to the dockerfile if the build script exists in the package otherwise its ignored.
# Package nodejs-express-template
FROM base as nodejs-express-template-build
WORKDIR /app/packages/server
# Here the dependencies will be installed and the local required packages bootstrapped.
# The --slim flag will cause the package json to only include the dependencies, so not all changes to the package json cause docker to reinstall all packages.
COPY  packages/server/package-slim.json package.json
WORKDIR /app/
RUN npx lerna bootstrap --scope=nodejs-express-template --includeDependencies
WORKDIR /app/packages/server
# The normal package.json should be copied after the install into the container
COPY  packages/server/package.json ./
# This will only add the command to the dockerfile if the build script exists in the package otherwise its ignored.
# final stage
FROM base
COPY --from=client-build /app/packages/client /app/packages/client
COPY --from=nodejs-express-template-build /app/packages/server /app/packages/server

CMD ["npm", "run", "dev"]