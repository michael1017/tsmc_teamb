# Backend

use Fastify, Typescript and MongoDB

## API spec of IT helpdesk

[API Spec](https://github.com/michael1017/tsmc_teamb/blob/dev/backend/docs/ithelp.yaml)

```
http://localhost:8888/documentation/
```

## Build backend image

```
docker build -t b-backend .
```

## Run backend container

```
docker run -d -p 8888:8888 --name b-backend b-backend
```
## Feature tests

run all feature test cases

```
npm run test
```

## Available Scripts

```
npm run build
```

Build the app for production to the out folder.

```
npm run start
```

Run the backend app with node.

## Run MongoDB with docker

Make sure ```docker``` is installed

```
docker run -d -p 27017:27017 mongo
```
