/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Tetra",
    tagline: "A simple 2D game framework written in Rust.",
    url: "https://tetra.seventeencups.net",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "17cupsofcoffee",
    projectName: "tetra",
    themeConfig: {
        navbar: {
            title: "Tetra",
            items: [
                {
                    type: "doc",
                    docId: "installation",
                    position: "left",
                    label: "Docs",
                },
                {
                    to: "/showcase",
                    label: "Showcase"
                },
                {
                    href: "https://docs.rs/tetra",
                    label: "API Reference"
                },
                {
                    href: "https://ko-fi.com/17cupsofcoffee",
                    label: "Donate",
                    position: "right",
                },
                {
                    href: "https://github.com/17cupsofcoffee/tetra",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} Joe Clay and contributors.`,
        },
        prism: {
            additionalLanguages: ["rust", "toml"],
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/17cupsofcoffee/tetra-www/edit/main",
                    routeBasePath: "/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
