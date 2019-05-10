# Build stage
FROM node:10 as react-build
WORKDIR /app
COPY ./package.json ./package-lock.json ./
RUN ["npm", "i"]
COPY ./env-variables.sh ./
RUN ["chmod", "+x", "./env-variables.sh"]
COPY . ./
RUN ["npm", "run", "build:dev"]

# Serve stage
FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html
COPY --from=react-build /app/env-variables.sh /usr/share/nginx/html/env-variables.sh
EXPOSE 80
ENTRYPOINT ["/bin/sh", "-c", "/usr/share/nginx/html/env-variables.sh && nginx -g 'daemon off;'"]