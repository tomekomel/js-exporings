// src/apis/cmsAPI.js
const { cmsClient } = require("../configs/axios-clients")

const CmsAPI = {
    get: async function (slug) {
        const response = await cmsClient.request({
            url: `/article/${slug}`,
            method: "GET",
        })

        return response.data
    },

    getArticles: async function (limit, offset) {
        const response = await cmsClient.request({
            url: "/articles",
            method: "GET",
            params: {
                limit: limit,
                offset: offset,
            },
        })

        return response.data.entities
    },

    getAllArticles: async function () {
        const response = await cmsClient.request({
            url: "/articles",
            method: "GET",
        })

        return response.data.entities
    },
}

module.exports = { CmsAPI }
