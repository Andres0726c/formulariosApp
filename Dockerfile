### Etapa 1: Build
FROM node:14-alpine as build-step

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

### Etapa
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/formulariosApp /usr/share/nginx/html

EXPOSE 80