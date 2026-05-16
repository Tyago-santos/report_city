# Etapa 1: build
FROM node:22

WORKDIR /app
COPY package*.json ./
RUN npm install
ENV NEXT_PUBLIC_URL=http://localhost:3000

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]