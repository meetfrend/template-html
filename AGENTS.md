# Project

A static site in plain HTML, Tailwind CSS and JavaScript. There is no package.json, no npm dependencies and no build step.

- Pages are `.html` files at the root (`index.html`, `about.html`, …). Link between them with relative paths. Repeat the `<head>` (Tailwind script, theme block, fonts, `main.js`) on every page.
- Style with Tailwind utility classes. Tailwind v4 runs in the browser from the CDN script in `<head>`. Put theme tokens (`@theme`) and any custom CSS in the `<style type="text/tailwindcss">` block, not in a separate stylesheet.
- Dark mode is class-based (`dark:` variants, `.dark` on `<html>`). The theme toggle in `main.js` saves the choice.
- JavaScript is native ES modules: `main.js` is the entry. Split code into more files with `import`/`export` and relative paths ending in `.js`. Libraries, when really needed, come from a CDN as ES modules (for example `https://esm.sh/<package>@<exact version>`), never npm.
- Images and other assets go in `assets/`.
- The preview is a live-reloading static server; every saved file reloads the page.
- Don't add a package.json or a bundler unless the user asks to move off the plain stack.
