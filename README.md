# tetra.seventeencups.net

![Build Status](https://img.shields.io/netlify/1a4ff2e4-0213-4322-8706-6e61918a0095)
[![License](https://img.shields.io/crates/l/tetra.svg)](LICENSE)

This repository holds the source code for [Tetra](https://github.com/17cupsofcoffee/tetra)'s [documentation website](https://tetra.seventeencups.net).

It uses [Docusaurus 2](https://docusaurus.io) to generate a static site, which is then deployed to [Netlify](https://www.netlify.com/).

## Contributing

Contributions are welcome, whether they are for the content or the site's code! [Opening an issue](https://github.com/17cupsofcoffee/tetra-www/issues/new) before making large changes is recommended, to ensure everyone is on the same page.

To run the dev server:

```bash
npm run start
```

To build the site and output it to the `build` folder:

```
npm run build
```

Also, note that all commits will be formatted by [Prettier](https://prettier.io) in a commit hook.

### Adding to the Showcase

This site has a 'showcase' page, which lists games that were created with Tetra. If you'd like your project to appear in this list:

* Add a screenshot of your game to [`/static/img/showcase`](https://github.com/17cupsofcoffee/tetra-www/tree/main/static/img/showcase). Keep the file size reasonable, and no GIFs please!
* Add your game's info to [`/src/pages/showcase.js`](https://github.com/17cupsofcoffee/tetra-www/blob/main/src/pages/showcase.js).

Alternatively, if you don't feel confident in following the above steps, please [open an issue](https://github.com/17cupsofcoffee/tetra-www/issues/new).
