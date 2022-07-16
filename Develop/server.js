const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./route/index');
// create variables for the routes


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);
app.use(express.static('public'));


// `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.


app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);

// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).