const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    tag: { type: String, default: "Tag" },
    content: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
})

const Note = mongoose.model("note", NoteSchema);

module.exports = Note;