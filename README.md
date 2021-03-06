# AR Room Availability
> A web-based augmented reality application to visualize room availability

## Demo
See https://twitter.com/fr3ino/status/880108156982108160

## Technologies
* AR.js: https://github.com/jeromeetienne/AR.js
* A-Frame: https://aframe.io

## Structure
All source files belong to the `src` folder. The page itself is served off the `public` folder.

Gulp tasks deploy your compiled and packed styles (one `styles.css`) and scripts (`app.js`) to this public folder either uncompressed with sourcemaps as default or compressed and without sourcemaps for production (use `--production` argument to gulp tasks).

## Installation
```bash
npm install
```

After that execute `gulp serve`, point your browser to http://localhost:3000 and start adding and editing files in `src`.

## Gulp Tasks
* `gulp serve` - starts Browsersync and serves your app for testing in different browsers (default: http://localhost:3000, Browsersync-UI at http://localhost:3001), after changes in SCSS, JS and HTML files in `src` the page is automatically refreshed
* `gulp build` - executes all tasks, but does not start a browsersync server


Add `--production` to any gulp task to activate production mode. In production mode all code will be minified and no sourcemaps are written.

This boilerplate is based on https://github.com/freinbichler/es6-sass-boilerplate
