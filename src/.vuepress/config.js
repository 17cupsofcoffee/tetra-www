module.exports = {
  dest: "dist",

  title: "Tetra",
  description: "A simple 2D game framework written in Rust.",

  themeConfig: {
    repo: "17cupsofcoffee/tetra",
    docsRepo: "17cupsofcoffee/tetra-www",
    docsDir: "src",
    editLinks: true,
    lastUpdated: "Last updated",

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/installation/" },
      { text: "Showcase", link: "/showcase/" },
      { text: "API Reference", link: "https://docs.rs/tetra" },
      { text: "Changelog", link: "https://github.com/17cupsofcoffee/tetra/blob/master/CHANGELOG.md" },
    ],

    sidebar: [
      {
        title: "Documentation",
        collapsable: false,
        children: ["/installation", "/examples", "/faq"],
      },
      {
        title: "Tutorial: Pong",
        collapsable: false,
        children: [
          ["/tutorial/", "Introduction"],
          "/tutorial/01-creating-a-project",
          "/tutorial/02-adding-the-paddles",
          "/tutorial/03-adding-a-ball",
        ],
      },
    ],
  },

  plugins: [
    ["vuepress-plugin-clean-urls", { normalSuffix: '/', indexSuffix: '/', notFoundPath: '/404.html' }],
    ["vuepress-plugin-container", { type: "info", defaultTitle: "INFO" }],
    [
      "vuepress-plugin-seo",
      {
          title: ($page, $site) => $page.title === "Home" ? $site.title : $page.title,
          description: ($page, $site) => $page.frontmatter.description || $site.description,
          twitterCard: _ => null,
          image: _ => null,
      }
    ]
  ],
};
