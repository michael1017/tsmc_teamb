# Bot Server Example

using fastify webhook server

## build bot image

```
docker build -t b-bot .
```

## run bot container

```
docker run -d -p 6666:6666 --name b-bot b-bot
```
