FROM node:14.17.0-alpine3.12

WORKDIR /app

COPY ./package.json /app

RUN cd /app && npm install

COPY . .

ENV API_URL=

EXPOSE 3000

CMD ["/bin/sh", "-c", "cd /app && npm run start"]
