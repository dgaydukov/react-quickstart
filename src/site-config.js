/**
 * Config of the project
 * For local development, just set default values
 */

const isClient = typeof window !== 'undefined'

module.exports = {
    baseURL: isClient && window.APP_CONFIG.API_BASE_URL ? window.APP_CONFIG.API_BASE_URL : "https://jsonplaceholder.typicode.com/",
    cookieUserId: isClient && window.APP_CONFIG.COOKIE_USER_ID_NAME || "userId",
    cookieAuthToken: isClient && window.APP_CONFIG.COOKIE_AUTH_TOKEN_NAME || "accessToken"
}