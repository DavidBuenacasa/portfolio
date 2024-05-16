
FROM node:latest as build-step

RUN mkdir -p /app

WORKDIR /app

COPY packsage.json /app

RUN npm install

COPY . /app/

RUN npm run build --configuration=production

FROM nginx:latest

COPY --from=build-step /app/dist/portfolio /usr/share/nginx/html



