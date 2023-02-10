export default defineAppConfig({
  docus: {
    title: "TCore",
    description:
      "TCore is a virtual platform that enables the developer to focus on their app",
    image: '',
    socials: {
      // twitter: 'nuxt_themes',
      github: "TecTone23",
    },
    main: {
      fluid: true,
    },
    aside: {
      level: 0,
      exclude: [],
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      fluid: true,
      credits: false
    },
    github: {
      edit: true,
      repo: "docs.tcore.io",
      branch: "main",
      owner: "TecTone23",
    },
  },
});
