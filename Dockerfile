FROM node:alpine3.17

WORKDIR /app

COPY . ./ 

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "run", "dev"]
# CMD ["npm","start"]