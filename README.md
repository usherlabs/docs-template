# Website

- where to adjust headers?
- how to insert pages?
- how to style?
- how to customize footer?
- how to customize fonts?
- how to customize 
- don't forget to add font to typography scss

Note: `docusaurus/types` devDependency is explicit for this reason: https://github.com/facebook/docusaurus/issues/7880#issuecomment-1368025143


This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
