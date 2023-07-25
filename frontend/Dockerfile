FROM node:18

WORKDIR /app

COPY package*.json ./
COPY . /app

ENV NODE_ENV=development

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
