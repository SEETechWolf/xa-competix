FROM node:8.16.2-alpine

COPY . .

CMD ["node", "index.js"]