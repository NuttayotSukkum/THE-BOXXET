FROM node:23.7.0-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN npm ci --silent

RUN npm run build

FROM nginx:stable-alpine AS runtime

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]