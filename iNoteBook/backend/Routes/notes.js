const express = require('express');
const { getNotes, createNote, updateNotes, deleteNotes } = require("../controller/notesController");
const { notesValidationRules } = require("../controller/validations");

const notesRouter = express.Router();

notesRouter.get("/all-notes", getNotes);
notesRouter.post("/create-note", notesValidationRules, createNote);
notesRouter.put("/update-note/:id", updateNotes);
notesRouter.delete("/delete-note/:id", deleteNotes);

module.exports = notesRouter;

/* 
routes
get all notes - (GET) - localhost:2000/user/all-notes
update note -(PUT)- localhost:2000/user/update-note/noteid
delete note -(DELETE)- localhost:2000/user/delete-note/noteid
create note -(POST)- localhost:2000/user/create-note

*/
