FROM node:10.15.0-alpine as builder

WORKDIR /src

COPY package.json .
COPY package-lock.json .
RUN npm install

COPY src src
COPY angular.json angular.json
COPY tsconfig.json tsconfig.json

RUN ["npx", "ng", "build", "--prod", "--output-path", "dist" ]

FROM nginx:1.15.8-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /src/dist /usr/share/nginx/html
