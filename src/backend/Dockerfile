FROM node:latest
LABEL application="my-blog"
WORKDIR /backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD npm start