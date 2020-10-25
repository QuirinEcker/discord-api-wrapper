FROM node:lts-alpine3.9
WORKDIR /usr/src/app
CMD ["node", "./dist/Main/index.js"]
COPY package*.json ./
RUN npm i --save-prod
COPY . .
RUN npm run tsc
