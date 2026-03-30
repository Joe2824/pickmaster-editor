### Build-Umgebung ###
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

### Produktions-Image ###
FROM nginx:1.26.1-alpine
RUN apk update && apk upgrade
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
