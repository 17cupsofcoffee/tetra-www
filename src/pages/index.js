import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

const sample = `\
use tetra::graphics::{self, Color};
use tetra::{Context, ContextBuilder, State};

struct GameState;

impl State for GameState {
    fn draw(&mut self, ctx: &mut Context) -> tetra::Result {
        // Cornflower blue, as is tradition
        graphics::clear(ctx, Color::rgb(0.392, 0.584, 0.929));
        Ok(())
    }
}

fn main() -> tetra::Result {
    ContextBuilder::new("Hello, world!", 1280, 720)
        .build()?
        .run(|_| Ok(GameState))
}`;

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/installation">
                        Get Started →
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout description={siteConfig.tagline}>
            <HomepageHeader />
            <div className="container margin-vert--lg">
                <div className="row">
                    <div className="col col--6">
                        <h2>Example Code</h2>
                        <CodeBlock className="language-rust">
                            {sample}
                        </CodeBlock>
                    </div>
                    <div className="col col--6">
                        <h2>Installation</h2>
                        <CodeBlock className="language-toml">
                            {`tetra = "0.6"`}
                        </CodeBlock>
                        <h2>Features</h2>
                        <ul>
                            <li>XNA/MonoGame-inspired API</li>
                            <li>Efficient 2D rendering, with draw call batching by default</li>
                            <li>Easy input handling, via polling or events, with support for gamepads</li>
                            <li>Deterministic game loop by default, à la Fix Your Timestep</li>
                            <li>
                                Common building blocks built-in, such as:
                                <ul>
                                    <li>Font rendering</li>
                                    <li>Cameras</li>
                                    <li>Screen scaling</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
