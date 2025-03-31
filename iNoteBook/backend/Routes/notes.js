const express = require('express');
const { getNotes, createNote, updateNotes, deleteNotes } = require("../controller/notesController");
const { notesValidationRules } = require("../controller/validations");

const notesRouter = express.Router();

notesRouter.get("/all-notes", getNotes);
notesRouter.post("/create-note", notesValidationRules, createNote);
notesRouter.post("/update-note", notesValidationRules, updateNotes);
notesRouter.post("/delete-note", deleteNotes);

module.exports = notesRouter;