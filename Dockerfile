FROM node:16.14

WORKDIR /app

RUN corepack enable

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000 3000

CMD [ "yarn", "dev" ]