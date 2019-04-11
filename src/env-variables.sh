#!/bin/sh
echo "window.APP_CONFIG = { 
    COOKIE_USER_ID_NAME: '${COOKIE_USER_ID_NAME}',
    COOKIE_AUTH_TOKEN_NAME: '${COOKIE_AUTH_TOKEN_NAME}',
} " >> ./build/env-variables.js