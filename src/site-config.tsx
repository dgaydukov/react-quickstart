/**
 * Config of the project
 * For local development, just set default values
 */


/**
 * Lifehack to make ts work with window object
 * https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript
 */
declare global {
    interface Window { APP_CONFIG: any; }
}

const config = window.APP_CONFIG;

export default {
    env: config ? config.ENV_TYPE : "local",
    baseURL: config ? config.API_BASE_URL : "https://jsonplaceholder.typicode.com/",
    cookieUserId: config ? config.COOKIE_USER_ID_NAME : "userId",
    cookieAuthToken: config ? config.COOKIE_AUTH_TOKEN_NAME : "accessToken"
}