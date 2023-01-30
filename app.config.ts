export default defineAppConfig({
  docus: {
    title: "TCore",
    description:
      "TCore is a virtual platform that enables the developer to focus on their app",
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      // twitter: 'nuxt_themes',
      github: "TecTone23",
    },
    aside: {
      level: 0,
      exclude: [],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      fluid: true,
    },
    github: {
      edit: true,
      repo: "tcore-docs",
      branch: "main",
      owner: "TecTone23"
    }
  },
});
