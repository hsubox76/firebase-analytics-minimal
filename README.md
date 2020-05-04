# Firebase Analytics Minimal Setup (With Webpack)

This is the bare minimum needed to set up a web app using Firebase Analytics
and Webpack, for use as an example and to help debug issues.

## Setup

- Clone the repo.
- Put your Firebase config into the appropriate place in `src/index.js`.
- `yarn install`
- `yarn build` (Builds production files into `dist/`.)
- `yarn serve` Serves files in `dist/` at `localhost:8080`.
  **This is not a dev server. No hot reloading. You must rebuild if you change
  the code.**
