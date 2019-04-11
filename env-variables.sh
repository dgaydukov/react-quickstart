#!/bin/sh
echo "window.APP_CONFIG = { 
    API_BASE_URL: '${API_BASE_URL}',
    COOKIE_USER_ID_NAME: '${COOKIE_USER_ID_NAME}',
    COOKIE_AUTH_TOKEN_NAME: '${COOKIE_AUTH_TOKEN_NAME}',
} " >> ./build/env-variables.js