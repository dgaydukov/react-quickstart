# Build stage
FROM node:10 as react-build
WORKDIR /app
COPY . ./
RUN npm i
RUN npm run build:dev

# Serve stage
FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]