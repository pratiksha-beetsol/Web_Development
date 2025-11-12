const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');

// Load existing notes from localStorage
function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes')) || [];
  notesContainer.innerHTML = '';

  notes.forEach((noteText, index) => {
    createNote(noteText, index);
  });
}

// Create new note element
function createNote(text = '', index = null) {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <textarea>${text}</textarea>
    <button class="delete-btn">&times;</button>
  `;

  const textarea = note.querySelector('textarea');
  const deleteBtn = note.querySelector('.delete-btn');

  // Save note on input change
  textarea.addEventListener('input', saveNotes);

  // Delete note
  deleteBtn.addEventListener('click', () => {
    note.remove();
    saveNotes();
  });

  notesContainer.appendChild(note);
}

// Save all notes to localStorage
function saveNotes() {
  const notes = [];
  const allNotes = document.querySelectorAll('.note textarea');
  allNotes.forEach(note => notes.push(note.value));
  localStorage.setItem('notes', JSON.stringify(notes));
}

// Add new note
addNoteBtn.addEventListener('click', () => {
  createNote();
  saveNotes();
});

// Load on startup
loadNotes();
