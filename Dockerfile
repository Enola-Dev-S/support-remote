FROM node:18-alpine

WORKDIR /app
EXPOSE 5173
COPY . ./ 

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "run", "dev"]
# CMD ["npm","start"]