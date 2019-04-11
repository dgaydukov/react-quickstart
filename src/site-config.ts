/**
 * Config of the project
 * For local development, just set default values
 */

const config = window.APP_CONFIG;

module.exports = {
    env: config ? config.ENV_TYPE : "local",
    baseURL: config ? config.API_BASE_URL : "https://jsonplaceholder.typicode.com/",
    cookieUserId: config ? config.COOKIE_USER_ID_NAME : "userId",
    cookieAuthToken: config ? config.COOKIE_AUTH_TOKEN_NAME : "accessToken"
}