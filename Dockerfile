FROM node:12.13.0-alpine

ENV NODE_PATH=/code

RUN mkdir /code
WORKDIR /code

COPY . /code

RUN npm install

EXPOSE 5051

CMD [ "npm", "start" ]
