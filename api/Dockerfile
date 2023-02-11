FROM node:18

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY .. .

ENV MONGODB_URI=mongodb+srv://raunits:raunits@cluster0.bqxndrs.mongodb.net/books
ENV PORT=8000

EXPOSE 8000
EXPOSE 8080

CMD ["yarn", "start"]