const mongoose = require('mongoose');
const Notes = require('./models/notes');

const seedNotes = async () => {
    try {
        await Notes.deleteMany({});
        const sampleNotes = [
            { title: 'First Note', content: 'This is the first note.', userId: new mongoose.Types.ObjectId() },
            { title: 'Second Note', content: 'This is the second note.', userId: new mongoose.Types.ObjectId() },
            { title: 'Third Note', content: 'This is the third note.', userId: new mongoose.Types.ObjectId() },   
        ];
        await Notes.insertMany(sampleNotes);
        console.log('Sample notes seeded successfully!');
    } catch (err) {
        console.error('Error seeding notes:', err);
    }   
};

mongoose.connect('mongodb://localhost:27017/notesapp')
.then(() => {
    console.log('Connected to MongoDB for seeding');
    seedNotes().then(() => {
        mongoose.disconnect();
    });
}).catch((err) => {
    console.error('Error connecting to MongoDB for seeding:', err);
});      