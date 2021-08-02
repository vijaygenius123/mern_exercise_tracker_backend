FROM node:16-U8rhFK

WORKDIR /app

COPY package* .
RUN npm ci

COPY . .

CMD ["npm" ,"start"]
