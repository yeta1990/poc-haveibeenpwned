FROM node:18.4

WORKDIR /usr/src/app

COPY srcs/package.json /usr/src/app/package.json
COPY srcs/package-lock.json /usr/src/app/package-lock.json

RUN [ "npm", "install" ]
