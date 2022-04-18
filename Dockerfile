FROM alpine:3.15

RUN apk add yarn 

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . . 

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]