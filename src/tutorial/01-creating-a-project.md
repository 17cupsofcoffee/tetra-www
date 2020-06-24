# Creating a Project

First, you'll need to make sure your development environment is set up properly. There's three things that need to be installed on your machine in order to successfully compile a Tetra project:

* The latest stable version of Rust
* The SDL2 development libraries
* The ALSA development libraries (only required on Linux)

There's instructions on how to set these up on the '[Installation](../installation.md)' page, so make sure you've followed through those steps before continuing!

With that out of the way, we're now ready to get started on our first game! Open a terminal and run the following command to create a new Cargo project:

```bash
cargo new --bin pong
cd pong
```

Next, add Tetra as a dependency in the newly-generated `Cargo.toml`:

```toml
[dependencies]
tetra = "0.4"
```

::: danger
**If you're developing on Windows**, make sure you drop `SDL2.dll` into the `pong` folder and distribute it alongside your game. This can be obtained from the 'Runtime Binaries' section on the [SDL2 website](https://www.libsdl.org/download-2.0.php).
:::

Finally, let's add the imports we're going to use in this chapter to `main.rs`:

```rust
use tetra::graphics::{self, Color};
use tetra::{Context, ContextBuilder, State};
```

With that, we're ready to start developing our game! Let's take a closer look at one of the types you just imported.

## Creating a `Context`

[`Context`](https://docs.rs/tetra/0.4/tetra/struct.Context.html) is a struct that holds all of the 'global' state managed by the framework, such as window settings and connections to the graphics/audio/input hardware. Any function in Tetra's API that requires access to this state will take a reference to a `Context` as the first parameter, so you won't get very far without one!

To build our game's `Context`, we can use the descriptively-named [`ContextBuilder`](https://docs.rs/tetra/0.4/tetra/struct.ContextBuilder.html) struct:

```rust
fn main() {
    ContextBuilder::new("Pong", 640, 480)
        .quit_on_escape(true)
        .build();
}
```

This creates a `Context` that is configured to display a window with the title 'Pong', sized at 640 by 480 pixels, which will automatically close when the player presses the escape key.

::: info
To see what other options can be set on a `Context`, and what the default settings are, take a look at the API documentation for [`ContextBuilder`](https://docs.rs/tetra/0.4.1/tetra/struct.ContextBuilder.html).
:::

If you run `cargo run` in your terminal now, you'll notice that the window pops up for a split second, but then immediately closes. This is because we're not actually starting a game loop yet - `main` just returns straight away! To fix this, we'll need to create a `State`.

## Defining Some `State`

[`State`](https://docs.rs/tetra/0.4/tetra/trait.State.html) is a trait exposed by Tetra that is implemented for the type which stores the current state of the game. It exposes various methods that will be called at different points in the game loop, and you can override these in order to define your game's behaviour.

::: info
This trait fulfils a similar purpose to the `Game` base class in XNA, or the `ApplicationListener` interface in LibGDX.
:::

For now, we don't need to store data or override any of the default behaviour, so we can just use an empty struct and implementation:

```rust
struct GameState {}

impl State for GameState {}
```

## Running the Game Loop

Now that we have a `State`, we're ready to start the game loop! To do this, call the [`run`](https://docs.rs/tetra/0.4/tetra/struct.Context.html#method.run) method on `Context`, passing in a closure that constructs an instance of your `State` implementation:

```rust
fn main() -> tetra::Result {
    ContextBuilder::new("Pong", 640, 480)
        .quit_on_escape(true)
        .build()?
        .run(|_ctx| Ok(GameState {}))
}
```

There's a few things you should pay attention to here:

- The return type of `main` has been changed to [`tetra::Result`](https://docs.rs/tetra/0.4/tetra/error/type.Result.html).
- A [`?` operator](https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html#a-shortcut-for-propagating-errors-the--operator) has been added to the end of `build`.
- There is no semi-colon after `run`, so its output will be returned from `main`.

`build` will return an error if the context fails to be constructed, and `run` will return any errors you throw during the game loop. By bubbling these errors up and out of `main`, Rust will automatically print out the error message to the terminal, which is handy when debugging.

::: info
Returning `Result` from `main` is nice for prototyping, but doesn't give you much control over how the error gets reported. If you want to customize this, you can always `match` on the result of `build` and/or `run`.
:::

If you run `cargo run` from your terminal now, you should see a black window appear!

## Clearing the Screen

Our goal for this chapter was to set up our project, and we've done that! A black window isn't very interesting, though, so let's finish by changing the background color to something a bit more inspiring.

To do this, we'll use one of the `State` trait methods. [`draw`](https://docs.rs/tetra/0.4/tetra/trait.State.html#method.draw) is called by Tetra whenever it is time for the engine to draw a new frame. We can call [`tetra::graphics::clear`](https://docs.rs/tetra/0.4/tetra/graphics/fn.clear.html) inside this method to clear the window to a plain color:

```rust
impl State for GameState {
    fn draw(&mut self, ctx: &mut Context) -> tetra::Result {
        // Feel free to change the color to something of your choice!
        graphics::clear(ctx, Color::rgb(0.392, 0.584, 0.929));

        Ok(())
    }
}
```

Note that `draw` (like all other methods on the `State` trait) returns a `tetra::Result`. If an error is returned from one of these methods, the game loop will stop and `Context::run` will return.

If you `cargo run` one more time, the window should open again, but this time with a nicer background color!

## Next Steps

In this chapter, we set up a new Tetra project, and got a window to appear on the screen. [Next, we'll start drawing some graphics and handling some input!](./02-adding-the-paddles.md)

Here's the code from this chapter in full:

```rust
use tetra::graphics::{self, Color};
use tetra::{Context, ContextBuilder, State};

fn main() -> tetra::Result {
    ContextBuilder::new("Pong", 640, 480)
        .quit_on_escape(true)
        .build()?
        .run(|_ctx| Ok(GameState {}))
}

struct GameState {}

impl State for GameState {
    fn draw(&mut self, ctx: &mut Context) -> tetra::Result {
        graphics::clear(ctx, Color::rgb(0.392, 0.584, 0.929));

        Ok(())
    }
}
```
