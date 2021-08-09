FROM node:14.17.0-alpine3.12

WORKDIR /app

COPY ./package.json /app

RUN cd /app && npm install

COPY . .

ENV FASTIFY_PORT=6666
ENV FASTIFY_ENABLE_LOGGING=true
ENV ENV=dev
ENV API_URL=
ENV QNAMAKER_KEY=
ENV QNAMAKER_ENDPOINT=
ENV kbid=

RUN npm run build

EXPOSE 6666

CMD ["/bin/sh", "-c", "cd /app && npm run start"]
