FROM alpine:3.15.4

RUN apk add yarn 

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . . 

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]