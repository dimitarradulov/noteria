'use script';
const note = document.querySelector('.note');
const addNoteBtn = document.querySelector('.btn-add');
const notes = document.querySelector('.notes');
const main = document.querySelector('main');
const modal = document.querySelector('.modal');

// ** Functions **
const addNote = () => {
  if (!note.value) return;

  const noteContent = note.value;

  const noteNumber = notes.children.length + 1;

  notes.insertAdjacentHTML(
    'beforeend',
    `
    <div class="notes__note">
      <span class="delete-icon">X</span>
      <h3>Note #${noteNumber}</h3>
      <p class="notes__note-body">
        ${noteContent}
      </p>
      <button class="btn btn-details">View Details</button>
    </div>
  `
  );
};

const toggleModal = () => {
  modal.classList.toggle('hidden');
};

// ** Events **
addNoteBtn.addEventListener('click', addNote);

notes.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-icon')) {
    const clicked = e.target;
    const note = clicked.closest('.notes__note');
    note.remove();
  } else if (e.target.classList.contains('btn-details')) {
    const clicked = e.target;
    const noteBody = clicked.closest('.notes__note').querySelector('p');
    modal.querySelector('p').textContent = noteBody.textContent;
    toggleModal();
  }
});

modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')) {
    toggleModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleModal();
  }
});
