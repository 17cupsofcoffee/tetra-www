# tetra.seventeencups.net

![Build Status](https://img.shields.io/netlify/1a4ff2e4-0213-4322-8706-6e61918a0095)
[![License](https://img.shields.io/crates/l/tetra.svg)](LICENSE)

This repository holds the source code for [Tetra](https://github.com/17cupsofcoffee/tetra)'s [documentation website](https://tetra.seventeencups.net).

It uses [VuePress](https://vuepress.vuejs.org) to generate a static site, which is then deployed to [Netlify](https://www.netlify.com/).

## Contributing

Contributions are welcome, whether they are for the content or the site's code! Raising an issue before making large changes is recommended, to make sure that they align with the direction that I want the site to go.

To run the dev server:

```bash
npm run start
```

To build the site:

```
npm run build
```

Also note that all commits will be formatted by [Prettier](https://prettier.io) in a commit hook.
