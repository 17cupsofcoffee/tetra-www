---
sidebar: false
pageClass: showcase
---

# Showcase

This page is a showcase for projects that are using Tetra.

Please feel free to [add your own](https://github.com/17cupsofcoffee/tetra-www/edit/master/src/showcase.md)!

<Showcase :games="games" />

<script>
// Please put your screenshots in /src/.vuepress/public/img/showcase, so that they
// get pulled in as part of the site's build. Keep the file size reasonable, and no
// GIFs please!

export default {
    data: () => ({
        games: [
            {
                "title": "Mankojai",
                "description": "A puzzle game, created for the Nokia 3310 Jam.",
                "url": "https://puppetmaster.itch.io/mankojai",
                "author": "puppetmaster",
                "authorUrl": "https://puppetmaster.itch.io",
                "screenshot": "mankojai.png"
            },
            {
                "title": "Shoot Out Your Life",
                "description": "An arcade shooter where your ammo is your lives. Made for Ludum Dare 44.",
                "url": "https://puppetmaster.itch.io/shoot-out-your-life",
                "author": "puppetmaster",
                "authorUrl": "https://puppetmaster.itch.io",
                "screenshot": "shoot-out-your-life.png"
            },
            {
                "title": "Unblocked",
                "description": "A puzzle game, inspired by \"Flipull\" for the NES.",
                "url": "https://github.com/VladimirMarkelov/unblocked",
                "author": "VladimirMarkelov",
                "authorUrl": "https://github.com/VladimirMarkelov",
                "screenshot": "unblocked.png"
            },
            {
                "title": "rl",
                "description": "A tech demo, showing how a roguelike can be built with Tetra and Specs.",
                "url": "https://github.com/17cupsofcoffee/rl",
                "author": "17cupsofcoffee",
                "authorUrl": "https://github.com/17cupsofcoffee",
                "screenshot": "rl.png"
            },
            {
                "title": "Tetras",
                "description": "A Tetris clone, built to demonstrate what a full Tetra game might look like.",
                "url": "https://tetra.seventeencups.net/examples",
                "author": "17cupsofcoffee",
                "authorUrl": "https://github.com/17cupsofcoffee",
                "screenshot": "tetras.png"
            },
            {
                "title": "snake",
                "description": "A tiny snake sample, use arrow keys to steer the snake.",
                "url": "https://github.com/programmeramera/snake-in-tetra",
                "author": "johanlindfors",
                "authorUrl": "https://github.com/johanlindfors",
                "screenshot": "snake.png"
            },
            {
                "title": "flappy bird",
                "description": "A flappy bird sample, use mouse to interact.",
                "url": "https://github.com/programmeramera/flappy-in-rust",
                "author": "johanlindfors",
                "authorUrl": "https://github.com/johanlindfors",
                "screenshot": "flappy.png"
            },
            {
                "title": "Life",
                "description": "A puzzle game prototype.",
                "url": "https://datoh.itch.io/life",
                "author": "datoh",
                "authorUrl": "https://twitter.com/datoh",
                "screenshot": "life.png"
            },
            {
                "title": "Lonely Star",
                "description": "A side-scroller with generative music.",
                "url": "https://17cupsofcoffee.itch.io/lonely-star",
                "author": "17cupsofcoffee",
                "authorUrl": "https://github.com/17cupsofcoffee",
                "screenshot": "lonely-star.png"
            }
        ]
    })
}
</script>