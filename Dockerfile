FROM node:8.16.2-alpine

COPY . .
RUN npm install

CMD ["node", "index.js"]