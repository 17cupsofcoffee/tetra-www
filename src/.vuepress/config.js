module.exports = {
  title: "Tetra",
  description: "A simple 2D game framework written in Rust.",

  themeConfig: {
    repo: "17cupsofcoffee/tetra",
    docsRepo: "17cupsofcoffee/tetra-www",
    editLinks: true,
    lastUpdated: "Last updated",

    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/installation" },
      { text: "Changelog", link: "https://github.com/17cupsofcoffee/tetra/blob/master/CHANGELOG.md" },
      { text: "API Reference", link: "https://docs.rs/tetra" },
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

  plugins: [["vuepress-plugin-container", { type: "info", defaultTitle: "INFO" }]],
};
