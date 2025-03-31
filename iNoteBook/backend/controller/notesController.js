const Note = require('../Models/notesModel');
const { validationResult } = require("express-validator")


//creating new notes
const createNote = async (req, res) => {
    const { title, tag, content } = req.body;

    const error = await validationResult(req);

    //if data doesnt passed the vlidation
    if (error) return res.status(400).json({ error });

    try {
        await Note.create({ title, tag, content, userId: req.user.id });
        res.status(200).json({ msg: "created successfully" })
    } catch (error) {
        console.log(error)
        res.json({ message: "Internal server error" })
    }
}

const updateNotes = async (req, res) => {
    const { content, tag, id } = req.body;

    const error = await validationResult(req);

    if (error) return res.status(400).json({ error });

    try {
        await Note.findByIdAndUpdate({ _id: id }, { content, tag })
        res.status(200).json({ msg: "success" });
    } catch (error) {
        console.log(error)
        res.json({ message: "Internal server error" })
    }
}

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({userId:req.user.id});
        res.json({notes});
    } catch (error) {
        console.log(error)
        res.json({ message: "Internal server error" })
    }
}

const deleteNotes = async (req,res)=>{
    const {id} = req.body;
    const userId = req.user.id;
    try {
        await Note.findByIdAndDelete({_id:id})
    } catch (error) {
        
    }
}