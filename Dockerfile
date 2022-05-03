FROM node:16.14
ENV NODE_ENV=dev

WORKDIR /app

RUN corepack enable

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000
EXPOSE 24678

CMD [ "yarn", "dev" ]
