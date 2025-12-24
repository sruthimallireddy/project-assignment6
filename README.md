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

If you see an error like `EADDRINUSE` (address already in use), it means port 3000 is occupied. Fix options:
- Find the process: `lsof -i :3000 -P -n` or `sudo lsof -t -i:3000`
- Stop it: `kill <PID>` (or `kill -9 <PID>` if necessary)
- Or start on a different port: `PORT=3001 npm start`


Files added:
- `server.js` — entry point
- `routes/router.js` — modular routing/handlers
- `pages/*.html` — page files
- `public/css/styles.css` — CSS stylesheet

Testing:
- `curl -i http://localhost:3000/home` etc.

Feel free to ask for Express.js version or more routes.
