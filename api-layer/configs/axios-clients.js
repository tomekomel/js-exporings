// src/apis/configs/axiosClients.js
const axios = require("axios")
const axiosRetry = require("axios-retry")
const { errorHandler } = require("./axios-utils")

// defining the axios client for the headless CMS service
const cmsClient = axios.create({
    baseURL: "https://your-cms.com/api/v1",
})

// registering the custom error handler to the
// cmsClient axios instance
cmsClient.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})

axiosRetry(cmsClient, {
    retries: 3, // number of retries
    retryDelay: (retryCount) => {
        console.log(`Retry attempt: ${retryCount}`)

        // waiting 2 seconds between each retry
        return 2000
    },
    retryCondition: (error) => {
        // retrying only on 503 HTTP errors
        return error.response.status === 503
    },
})

module.exports = { cmsClient }
