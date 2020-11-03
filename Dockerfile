
FROM node:alpine

WORKDIR /src

COPY package.json /src

RUN yarn install

COPY . /src

EXPOSE 80

CMD ["yarn", "run", "start"]
