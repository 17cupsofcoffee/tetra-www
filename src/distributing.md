# Distributing

::: warning
This page is a work in progress. It's especially missing information on Mac and Linux, as I'm not sure what the idiomatic ways of distributing games are on those platforms!

If you have knowledge of these platforms, or other experience distributing games written in Rust, please [contribute](https://github.com/17cupsofcoffee/tetra-www/edit/master/src/distributing.md)!
:::

This page lists some of the things that should be taken into consideration when distributing a game built with Tetra.

The items are broken down into two categories:

* <Badge text="Required" type="error" vertical="middle" /> - Essential steps that should be followed for all projects.
* <Badge text="Optional" vertical="middle" /> - Non-essential steps that can be followed to make your game more polished.

## Build in Release Mode <Badge text="Required" type="error" vertical="middle" />

By default, Cargo builds projects in debug mode, with very few optimizations. When you plan on distributing your game, you should make sure to run `cargo build` with the `--release` flag, to ensure that the final executable is as optimized as possible. There are [benchmarks in the FAQ](/faq/#benchmarks) which show that this makes a significant different to the performance!

## Include SDL 2.0 <Badge text="Required" type="error" vertical="middle" />

Tetra uses a C library called SDL 2.0 to interact with platform-specific functionality (such as windowing and input). Unlike Tetra's Rust dependencies, SDL is usually dynamically linked, meaning that the library needs to be present on the end user's machine for your application to run. Therefore, it is usually good practice to bundle SDL with your game when distributing it.

On Windows, the easiest way to do this is to include `SDL2.dll` in the same folder as your game's executable. This file can be obtained via the '[Runtime Binaries](https://www.libsdl.org/download-2.0.php)' section of SDL's website.

Alternatively, you can choose to [statically link SDL into your game](/faq/#can-i-static-link-sdl) - however, this comes with [some tradeoffs](https://hg.libsdl.org/SDL/file/default/docs/README-dynapi.md) that need to be taken into account, so make sure you understand them before switching.

## Include Software Licenses <Badge text="Required" type="error" vertical="middle" />

Tetra is provided under the terms of the [MIT License](https://opensource.org/licenses/MIT). One of the terms of this license is that you must include [the license text](https://github.com/17cupsofcoffee/tetra/blob/master/LICENSE) alongside 'all copies or substantial portions' of the library. Similar terms apply to many of Tetra's dependencies, including [the Rust standard library](https://github.com/rust-lang/rust/blob/master/COPYRIGHT), so it is important to make sure you've fulfilled these requirements when distributing your game to the public.

In practice, this usually means adding a screen to your game that displays open source licenses, or providing text files alongside the executable.

::: tip
[Embark Studios](https://www.embark-studios.com) has created a tool called [`cargo-about`](https://github.com/EmbarkStudios/cargo-about/) which can help you automate the arduous task of gathering these license files and outputting them into a template.

Note, however, that it [does not currently provide license info for the Rust standard library](https://github.com/EmbarkStudios/cargo-about/issues/16) - you will need to obtain this yourself.
:::

## Change the Game's Icon/Metadata <Badge text="Optional" vertical="middle" />

By default, an application built by Cargo won't have any sort of icon or metadata, which can look somewhat unprofessional.

On Windows, you can add these easily via the [`winres`](https://github.com/mxre/winres) crate, which can be used via a `build.rs` script in your project. Alternatively, you can call directly into the `rc` command line tool included in the Windows SDK, or use an GUI application such as [ResEdit](http://www.resedit.net/).

## Hide the Console Window <Badge text="Optional" vertical="middle" />

On some platforms, applications built with Rust will display a console window while running by default. This can be useful while debugging, but is usually undesirable for the final release. 

On Windows, you can hide this window by adding the `windows_subsystem` attribute to your `main.rs`:

```rust
// To hide the console in all builds:
#![windows_subsystem = "windows"]

// To hide the console in release builds only:
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
```

On Mac, you will need to package your game as a `.app` - see [this thread on the Rust forums](https://users.rust-lang.org/t/how-i-can-build-graphic-application-app-without-consoles-window-for-osx-using-rustc/14469/6) for more info.

