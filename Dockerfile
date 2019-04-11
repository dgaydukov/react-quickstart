# Build stage
FROM node:10 as react-build
WORKDIR /app
COPY . ./
RUN ["chmod", "+x", "./env-variables.sh"]
RUN ["npm", "i"]
RUN ["npm", "run", "build:dev"]

# Serve stage
FROM nginx:alpine
COPY --from=react-build /app/build /usr/share/nginx/html
COPY --from=react-build /app/env-variables.sh /usr/share/nginx/html/env-variables.sh
EXPOSE 80
ENTRYPOINT ["/bin/sh", "-c", "/usr/share/nginx/html/env-variables.sh && nginx -g 'daemon off;'"]