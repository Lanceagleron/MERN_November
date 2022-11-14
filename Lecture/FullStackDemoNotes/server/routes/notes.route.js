const NoteController = require('../controllers/note.controller');
 
module.exports = app => {
    app.get('/api/notes', NoteController.findAllNotes);
    app.get('/api/notes/:id', NoteController.findOneNote);
    app.post('/api/notes', NoteController.createNewNote);
    app.put('/api/notes/:id', NoteController.updateNote);
    app.delete('/api/notes/:id', NoteController.deleteNote);
}