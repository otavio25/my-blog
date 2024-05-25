FROM node:18-alpine3.19
LABEL application="my-blog"
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start