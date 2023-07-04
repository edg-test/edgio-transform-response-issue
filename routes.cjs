const { Router } = require("@edgio/core")

const router = new Router()
    .match("/:path*", ({ proxy }) => {
        proxy("next", {
            transformResponse: (response, { request }) => {
                console.log("Transforming response")
                response.setHeader("x-custom-header", "value")
            }
        })
    })

module.exports = router
