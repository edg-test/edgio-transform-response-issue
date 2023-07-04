// edgio.config.js
module.exports = {
  origins: [
    {
      name: "next",
      hosts: [
        {
          location: "nextjs.org"
        }
      ],
      override_host_header: "nextjs.org"
    }
  ],
  serverless: {
    include: ["functions/**/*"]
  }
};
//# sourceMappingURL=edgio.config.js.map
