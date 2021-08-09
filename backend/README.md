# Backend

use Fastify, Typescript and MongoDB

## API spec of IT helpdesk

```
http://localhost:8888/documentation/
```

or

```
https://8871f05b36ce.ngrok.io/documentation/
```

## Build backend image

```
docker build -t b-backend .
```

## Run backend container

```
docker run -d -p 8888:8888 --name b-backend b-backend
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
