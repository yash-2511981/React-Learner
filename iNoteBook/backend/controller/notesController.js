const Note = require('../Models/notesModel');
const { validationResult } = require("express-validator")


//get all notes
const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({ userId: req.user.id });
        res.json({ notes });
    } catch (error) {
        console.log(error)
        res.json({ message: "Internal server error" })
    }
}

//creating new notes
const createNote = async (req, res) => {
    const { title, tag, content } = req.body;

    const error = await validationResult(req);

    //if data doesnt passed the vlidation
    if (!error.isEmpty()) return res.status(400).json({ error });

    try {
        await Note.create({ title, tag, content, userId: req.user.id });
        res.status(200).json({ msg: "created successfully" })
    } catch (error) {
        console.log(error)
        res.json({ message: "Internal server error" })
    }
}

//updating notes
const updateNotes = async (req, res) => {
    const {title,tag,content } = req.body;

    const error = await validationResult(req);

    if (!error.isEmpty()) return res.status(400).json({ error })

    try {
        const note = await Note.findById(req.params.id);

        //if note doesnt present in the database.
        if (!note) return res.status(400).send("notes not found")

        //prevent notes updation from diffrent user
        if (note.userId.toString() !== req.user.id) return res.status(401).send("not found")

        await Note.findByIdAndUpdate(req.params.id, { content, tag, title })
        res.status(200).json({ msg: "updated successfully" });
    } catch (error) {
        console.log(error)
        res.json({ message: "Internal server error" })
    }
}


//delete notes 
const deleteNotes = async (req, res) => {
    try {
        const note = await Note.findById({ _id: req.params.id });

        //if note doesnt present in the database.
        if (!note) return res.status(400).send("not found")

        //prevent notes updation from diffrent user
        if (note.userId.toString() !== req.user.id) return res.status(401).send("not found")
        
        await Note.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json({ msg: "deleted successfully" });
    } catch (error) {
        console.log(error)
        res.json({ message: "Internal server error" })
    }
}

module.exports = { getNotes, deleteNotes, updateNotes, createNote };