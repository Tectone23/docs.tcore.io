export default defineNuxtConfig({
  extends: "@nuxt-themes/docus",
  runtimeConfig: {
    public: {
      algolia: {
        applicationId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        docSearch: {
          indexName: process.env.ALGOLIA_INDEX,
        },
      },
    },
  },
});
