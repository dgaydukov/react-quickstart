# Stage 1
FROM node:8 as react-build
WORKDIR /app
COPY . ./
RUN npm i
RUN npm run build:dev

# Stage 2 - the production environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]