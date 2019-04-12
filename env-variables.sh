#!/bin/sh
echo "window.APP_CONFIG = {
    ENV_TYPE: '${ENV_TYPE}',
    API_BASE_URL: '${API_BASE_URL}',
    COOKIE_USER_ID_NAME: '${COOKIE_USER_ID_NAME}',
    COOKIE_AUTH_TOKEN_NAME: '${COOKIE_AUTH_TOKEN_NAME}',
} " >> /usr/share/nginx/html/env-variables.js