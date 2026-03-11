const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/notesDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const noteSchema = new mongoose.Schema({
    title: String,
    subject: String,
    description: String,
    created_date: { type: Date, default: Date.now }
});

const Note = mongoose.model("Note", noteSchema);

app.post("/notes", async (req, res) => {
    const { title, subject, description } = req.body;
    const note = new Note({ title, subject, description });
    await note.save();
    res.json(note);
});

app.get("/notes", async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

app.put("/notes/:id", async (req, res) => {
    const { title, description } = req.body;
    const note = await Note.findByIdAndUpdate(req.params.id, { title, description }, { new: true });
    res.json(note);
});

app.delete("/notes/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted successfully" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));