const db = require("../models");
const config = require("../config/auth.config");
const authJwt = require("../middleware/authjwt");
const uuid = require('uuid')

const User = db.user;
const Note = db.notes;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// to get personal notes
exports.getPersonalNotes = async (req, res) => {
    const userId = req.userId; // Assuming user ID is available in req.user after authentication
    try {
        const notes = await Note.findAll({ where: { userId: userId } });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// to add new personal note
exports.createPersonalNote = async (req, res) => {
    const userId = req.userId; // Assuming user ID is available in req.user after authentication
    const id = req.headers.note_id;
    const { title, body } = req.body;
    try {
        const newNote = await Note.create({ noteId: id, title: title, body: body, userId: userId });
        res.json(newNote);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// to update personal notes
exports.updatePersonalNote = async (req, res) => {
    const userId = req.userId; // Assuming user ID is available in req.user after authentication
    const id = req.headers.note_id;
    const { title, body } = req.body;
    try {
        const [updated] = await Note.update({ title: title, body: body }, { where: { noteId: id, userId: userId } });
        if (updated) {
            const updatedNote = await Note.findOne({ where: { noteId: id, userId: userId } });
            res.json(updatedNote);
        } else {
            res.status(404).json({ error: 'Note not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// to delete personal notes
exports.deletePersonalNote = async (req, res) => {
    const userId = req.userId; // Assuming user ID is available in req.user after authentication
    const id = req.headers.note_id;
    try {
        const deleted = await Note.destroy({ where: { noteId: id, userId: userId } });
        if (deleted) {
            res.json({ message: 'Note deleted successfully' });
        } else {
            res.status(404).json({ error: 'Note not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
