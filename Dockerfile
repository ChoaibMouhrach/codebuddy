FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm i -g pnpm

RUN pnpm install

RUN pnpm run build

EXPOSE 3000