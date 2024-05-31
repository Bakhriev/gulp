# Gulp Build System Documentation

## Table of Contents

1. [Installation](#installation)
2. [File Structure](#file-structure)
3. [Gulp Tasks](#gulp-tasks)
   - [HTML](#html)
   - [CSS](#css)
   - [JavaScript](#javascript)
   - [Images](#images)
   - [Videos](#videos)
   - [SVG Handling](#svg-handling)
   - [Vendors](#vendors)
   - [Fonts](#fonts)
   - [Minification](#minification)
   - [Cleaning](#cleaning)
   - [Server](#server)
   - [Production](#production)
4. [Watch Files](#watch-files)
5. [Commands](#commands)

## Installation

To get started with this Gulp build system, you need to have Node.js and npm installed on your machine. Then, follow these steps:

1. Clone or download the repository.
2. Navigate to the project directory.
3. Install the dependencies using npm:

   ```bash
   npm install
   ```

## File Structure

Here's the basic structure of the project:

```
project/
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── img/
│   │   ├── img/svg/
│   │   ├── js/
│   │   ├── scss/
│   │   ├── video/
│   │   └── vendors/
│   └── *.html
│
├── dist/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── img/
│   │   ├── img/svg/
│   │   ├── js/
│   │   ├── css/
│   │   ├── video/
│   │   └── vendors/
│   └── *.html
│
├── gulpfile.js
└── package.json
```

- **src/**: Source files.
- **dist/**: Build output.
- **gulpfile.js**: Gulp configuration.
- **package.json**: Project metadata and dependencies.

## Gulp Tasks

### HTML

#### `html`

Compiles and includes HTML files:

```javascript
exports.html = html;
```

#### `htmlMin`

Minifies HTML files:

```javascript
exports.htmlMin = htmlMin;
```

### CSS

#### `css`

Compiles SCSS to CSS, groups media queries, autoprefixes, and beautifies CSS:

```javascript
exports.css = css;
```

#### `cssMin`

Compiles, groups media queries, autoprefixes, and minifies CSS:

```javascript
exports.cssMin = cssMin;
```

### JavaScript

#### `js`

Compiles JavaScript files:

```javascript
exports.js = js;
```

#### `jsMin`

Minifies JavaScript files:

```javascript
exports.jsMin = jsMin;
```

### Images

#### `img`

Processes image files:

```javascript
exports.img = img;
```

### Videos

#### `video`

Processes video files:

```javascript
exports.video = video;
```

### SVG Handling

#### `svgToSprite`

Creates SVG sprite:

```javascript
exports.svgToSprite = svgToSprite;
```

#### `svgNormal`

Processes individual SVG files:

```javascript
exports.svgNormal = svgNormal;
```

### Vendors

#### `vendors`

Processes vendor files (CSS/JS):

```javascript
exports.vendors = vendors;
```

### Fonts

#### `fonts`

Processes font files:

```javascript
exports.fonts = fonts;
```

### Minification

Minifies HTML, CSS, and JS for production builds:

```javascript
exports.htmlMin = htmlMin;
exports.cssMin = cssMin;
exports.jsMin = jsMin;
```

### Cleaning

#### `clean`

Deletes the `dist` directory:

```javascript
exports.clean = clean;
```

### Server

#### `serve`

Starts a development server with live reload:

```javascript
exports.serve = serve;
```

### Production

#### `prod`

Sets the production flag:

```javascript
exports.prod = prod;
```

## Watch Files

Watches for changes in source files and reruns relevant tasks:

```javascript
exports.watchFiles = watchFiles;
```

## Commands

### Development

For development, run the following command to clean the output directory, build the project, and start a development server with live reload:

```bash
npm run dev
```

### Build

To create a production build, which includes minification and optimization, run:

```bash
npm run build
```

### Watch

To watch files for changes and automatically rebuild, run:

```bash
npm run watch
```

### Preview

To preview the build, run:

```bash
npm run preview
```

### Default

The default command runs the development environment in parallel with file watching:

```bash

```
