# Resume Dashboard
Simple dashboard with three editable sections. Nothing fancy, just a demo of what React is capable of with really little work.

Favicon stolen from [favicon.cc](http://www.favicon.cc/?action=icon&file_id=893971)

Live version: [tb-resume-app.surge.sh](http://tb-resume-app.surge.sh/)

---

## Files
Project is divided into two distinctive directories - `js` and `sass`.

JavaScript consists of `Components`, `Services`, `Helpers` directories and main `index.js` file.

Sass (SCSS) consists of `components` directory and `style.scss` file.

## JavaScript
### `Components`
* `Button` — stateless component for creating buttons
* `PageHeader` — stateless component for creating page headers
* `Section` — stateless component for creating wrapping sections
* `SmallItem` — stateless component for section items
* `App` — main application file

### `Helpers`
* `strings.js` — collection of strings for inclusion in other files

### `Services`
* `expect.js` — small library for testing whether the expected values are what you want

* `index.js` — main app file

## SCSS
* `components` — visual components
* `style.scss` — main style file, imports css framework _Bulma_

## About this app
I created very small and simple application in which user can manipulate the fields in three sections (My details, Work experience and Education).

Code is documented where needed.

