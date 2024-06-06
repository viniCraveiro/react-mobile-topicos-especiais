FROM node:latest

WORKDIR /app

COPY index.js ./

EXPOSE 3001

CMD ["node", "index.js"]