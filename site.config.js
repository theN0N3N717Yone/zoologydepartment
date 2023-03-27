const CONFIG = {
  // profile setting (required)
  profile: {
    name: "theN0N3N717Yone",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "web developer",
    bio: "yet another Homo sapiens",
    email: "daskumarmriganka1@gmail.com",
    github: "theN0N3N717Yone",
    instagram: "",
  },
  projects: [
    {
      name: `mriganka`,
      href: "https://mrigankakumardas.vercel.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "zoonotes",
    description: "welcome to zoonotes!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://zoonotes.vercel.app/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "theN0N3N717Yone/zoonotes",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
