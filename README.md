## About

This is a lightweight example project which uses fixtures! 🎉

To find out more about fixtures and why you might want to use them, check out [this blog post]().

### Stack

 - 🦅 [Urql](https://github.com/FormidableLabs/urql) (GraphQL client)
 - 🚀 [Cosmos](https://github.com/react-cosmos/react-cosmos) (Fixture bundler & server)
 - 📸 [Backstop](https://github.com/garris/BackstopJS) (Visual regression)
 - 📦 [Parcel](https://github.com/parcel-bundler/parcel) (Full site bundler & server)
 - ⚛️ [React](https://github.com/facebook/react/) (... it's React)


## Development

![Example dev environment](https://github.com/andyrichardson/fixture-example-project/blob/master/assets/Kapture%202020-02-19%20at%2016.19.33.gif?raw=true)

### Run in CodeSandbox

Navigate to the [CodeSandbox here](https://codesandbox.io/embed/github/andyrichardson/fixture-example-project/tree/code-sandbox-cosmos/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fpages%2Fposts%2FPostsPage.fixture.tsx&theme=dark) to get started.

### Run locally

```
# Install dependencies
yarn

# Start cosmos
yarn cosmos
```

## Full site

![example site](https://github.com/andyrichardson/fixture-example-project/blob/master/assets/Kapture%202020-02-20%20at%2013.03.54.gif?raw=true)

### Run in CodeSandbox

Navigate to the [CodeSandbox here](https://codesandbox.io/embed/github/andyrichardson/fixture-example-project/tree/master/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fpages%2Fposts%2FPostsPage.tsx&theme=dark) to get started.

### Run locally

```
# Install dependencies
yarn

# Start cosmos
yarn cosmos
```



## Visual regression

Fixtures can be tested for visual changes by using backstop

```
# Create reference images (from fixtures)
docker-compose run backstop reference

# Diff current fixtures against reference images
docker-compose run backstop test
```



