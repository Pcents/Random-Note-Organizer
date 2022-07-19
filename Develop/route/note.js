const noteRou = require('express').Router();
// npm package used to give each note a unique ID
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');
// GET Route for retrieving all the notes
noteRou.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);
// POST Route for submitting notes
noteRou.post('/', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
      readAndAppend(newNote, './db/db.json');
      const response = {
        status: 'success',
        body: newNote,
      };
      res.json(response);
    } else {
      res.json('Error in posting note');
    }
  });

  // * `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
  
noteRou.delete('/api/notes/:id',(req,res)=>{
  const noteId = req.params.id
  readFromFile('./db/db.json')
  .then((data)=>JSON.parse(data))
  .then((json)=>{
    const result = json.filter((notes)=>notes.id !==noteId);
    writeToFile('./db/db.json', result);
    res.json(`Your note ${noteId} has been deleted 🗑️`)
  })
});

  module.exports = noteRou;
