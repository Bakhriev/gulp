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

To get started with this Gulp build system, you need to have Node.js and yarn installed on your machine. Then, follow these steps:

1. Clone or download the repository.
2. Navigate to the project directory.
3. Install the dependencies using yarn or npm:

   ```bash
   yarn install
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

## Commands

### Dev

```bash
yarn run dev
```

### Build

```bash
yarn run build
```

### Preview

To preview the build

```bash
yarn run preview
```
