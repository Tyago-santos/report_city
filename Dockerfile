# Etapa 1: build
FROM node:22 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: produção (leve)
FROM node:22

WORKDIR /app

# Copia só o necessário
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]