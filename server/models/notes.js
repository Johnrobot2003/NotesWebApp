const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    folderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder' },
}, { timestamps: true });

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;