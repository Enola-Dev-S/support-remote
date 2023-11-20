FROM node:18-alpine

WORKDIR /app
EXPOSE 3000
COPY . ./ 

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "run", "dev"]
# CMD ["npm","start"]