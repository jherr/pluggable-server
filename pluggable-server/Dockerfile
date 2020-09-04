FROM node:12
WORKDIR /usr/src/app
RUN mkdir /usr/src/plugins
COPY package.json ./

RUN npm install
COPY . .
RUN npm build
EXPOSE 3000
CMD [ "node", "dist/main.js" ]