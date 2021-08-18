import React, { useState, useEffect } from 'react';
import './App.css';
import { DataStore } from '@aws-amplify/datastore';
import { Note } from './models';

const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const models = await DataStore.query(Note);
    setNotes(models);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await DataStore.save(
      new Note({
      "name": formData.name,
      "description": formData.description,
      "value": formData.value
      })
    );

    const models = await DataStore.query(Note);
    setNotes(models);
  }

  async function deleteNote({ id }) {
    const modelToDelete = await DataStore.query(Note, id);
    DataStore.delete(modelToDelete);

    const models = await DataStore.query(Note);
    setNotes(models);
  }

  return (
    <div className="App">
      <h1>My Notes App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Note name"
        value={formData.name}
      />
      <input
        onChange={e => setFormData({ ...formData, 'description': e.target.value})}
        placeholder="Note description"
        value={formData.description}
      />
       <input
        onChange={e => setFormData({ ...formData, 'value': e.target.value})}
        placeholder="Value"
        value={formData.value}
      />
      <button onClick={createNote}>Create Note</button>
      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={note.id || note.name}>
              <h2>{note.name}</h2>
              <p>{note.description}</p>
              <p>{note.value}</p>
              <button onClick={() => deleteNote(note)}>Delete note</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;