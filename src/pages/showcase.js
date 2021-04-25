import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./showcase.module.css";

const items = [
    {
        title: "Mankojai",
        description: "A puzzle game. Made for Nokia 3310 Jam.",
        url: "https://puppetmaster.itch.io/mankojai",
        author: "puppetmaster",
        authorUrl: "https://puppetmaster.itch.io",
        screenshot: "mankojai.png"
    },
    {
        title: "Shoot Out Your Life",
        description: "An arcade shooter where your ammo is your lives. Made for Ludum Dare 44.",
        url: "https://puppetmaster.itch.io/shoot-out-your-life",
        author: "puppetmaster",
        authorUrl: "https://puppetmaster.itch.io",
        screenshot: "shoot-out-your-life.png"
    },
    {
        title: "Unblocked",
        description: "A puzzle game, inspired by \"Flipull\" for the NES.",
        url: "https://github.com/VladimirMarkelov/unblocked",
        author: "VladimirMarkelov",
        authorUrl: "https://github.com/VladimirMarkelov",
        screenshot: "unblocked.png"
    },
    {
        title: "rl",
        description: "A tech demo, showing how a roguelike can be built with Tetra and an ECS library.",
        url: "https://github.com/17cupsofcoffee/rl",
        author: "17cupsofcoffee",
        authorUrl: "https://github.com/17cupsofcoffee",
        screenshot: "rl.png"
    },
    {
        title: "Tetras",
        description: "A Tetris clone, built to demonstrate what a full Tetra game might look like.",
        url: "https://tetra.seventeencups.net/examples",
        author: "17cupsofcoffee",
        authorUrl: "https://github.com/17cupsofcoffee",
        screenshot: "tetras.png"
    },
    {
        title: "snake",
        description: "A tiny snake sample, use arrow keys to steer the snake.",
        url: "https://github.com/programmeramera/snake-in-tetra",
        author: "johanlindfors",
        authorUrl: "https://github.com/johanlindfors",
        screenshot: "snake.png"
    },
    {
        title: "flappy bird",
        description: "A flappy bird sample, use mouse to interact.",
        url: "https://github.com/programmeramera/flappy-in-rust",
        author: "johanlindfors",
        authorUrl: "https://github.com/johanlindfors",
        screenshot: "flappy.png"
    },
    {
        title: "Life",
        description: "A puzzle game prototype.",
        url: "https://datoh.itch.io/life",
        author: "datoh",
        authorUrl: "https://twitter.com/datoh",
        screenshot: "life.png"
    },
    {
        title: "Lonely Star",
        description: "A side-scroller with generative music.",
        url: "https://17cupsofcoffee.itch.io/lonely-star",
        author: "17cupsofcoffee",
        authorUrl: "https://github.com/17cupsofcoffee",
        screenshot: "lonely-star.png"
    },
    {
        title: "Will It Dissolve?",
        description: "A little puzzle game. Made for Open Jam 2019.",
        url: "https://puppetmaster.itch.io/dissolve",
        author: "puppetmaster",
        authorUrl: "https://puppetmaster.itch.io",
        screenshot: "will-it-dissolve.png"
    },
    {
        title: "Compact Space",
        description: "An unusual space shooter. Made for Game Off 2019.",
        url: "https://puppetmaster.itch.io/compact-space",
        author: "puppetmaster",
        authorUrl: "https://puppetmaster.itch.io",
        screenshot: "compact-space.png"
    },
    {
        title: "The Last Of Its Kind",
        description: "A very simple child's game with a hidden little message. Made for Ludum Dare 46.",
        url: "https://puppetmaster.itch.io/the-last-of-its-kind",
        author: "puppetmaster",
        authorUrl: "https://puppetmaster.itch.io",
        screenshot: "the-last-of-its-kind.png"
    },
    {
        title: "Islas",
        description: "A small, easy, relaxed, non-violent puzzle adventure game. Made for LOWREZJAM 2020.",
        url: "https://puppetmaster.itch.io/islas",
        author: "puppetmaster",
        authorUrl: "https://puppetmaster.itch.io",
        screenshot: "islas.png"
    }
];

export default function Showcase() {
    return <Layout title="Showcase" description="A list of projects developed using the Tetra 2D game framework.">
        <div className="container margin-vert--lg">
            <h1>Showcase</h1>
            <p>
                This page is a showcase for projects that are using Tetra.
                Please feel free to <a href="https://github.com/17cupsofcoffee/tetra-www#adding-to-the-showcase">
                add your own</a>!
            </p>
        </div>
        <div className="container">
            <div className="row">
                {items.map(item => (
                    <div className="col col--3 margin-bottom--lg" key={item.title}>
                        <div className={clsx("card", styles.showcaseCard)}>
                            <div className="card__image">
                                <a href={item.url}>
                                    <img src={"/img/showcase/" + item.screenshot} />
                                </a>
                            </div>
                            <div className="card__body">
                                <div className="avatar">
                                    <div className="avatar__intro">
                                        <h4 className="avatar__name">
                                            <a href={item.url}>{item.title}</a>
                                        </h4>
                                        <small className="avatar__subtitle">
                                            <a href={item.authorUrl}>{item.author}</a>
                                        </small>
                                        <small className="avatar__subtitle">
                                            {item.description}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Layout>;
}