FROM node:14.17.0-alpine3.12

WORKDIR /app

COPY ./package.json /app

RUN cd /app && npm install

COPY . .

ENV MONGO_HOST=mongo
ENV MONGO_PORT=27017
ENV MONGO_DATABASE=backend
ENV FASTIFY_PORT=8888
ENV FASTIFY_ENABLE_LOGGING=true
ENV ENV=dev

RUN npm run build

EXPOSE 8888

CMD ["/bin/sh", "-c", "cd /app && npm run start"]
