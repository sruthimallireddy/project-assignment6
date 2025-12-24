# Basic HTTP Server

Simple Node.js server using the built-in `http` module to serve HTML pages with routing.

Routes:
- `/home` → Home page
- `/about` → About page
- `/contact` → Contact page
- `/services` → Extra route
- Any other route → Custom 404 page

Run:
1. Start the server: `npm start` (listens on PORT 3000 by default or `process.env.PORT`).
2. Open your browser at `http://localhost:3000/home` (or `/about`, `/contact`).


Files added:
- `server.js` — entry point
- `routes/router.js` — modular routing/handlers
- `pages/*.html` — page files
- `public/css/styles.css` — CSS stylesheet

Testing:
- `curl -i http://localhost:3000/home` etc.
