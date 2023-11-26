'use client'
import React, { useState } from 'react';
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Notes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState<string>('');
  const [isAddingNote, setIsAddingNote] = useState<boolean>(false);

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
      setIsAddingNote(false);
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">Notes</h1>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
      <div>
        {isAddingNote ? (
          <>
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <button onClick={() => setIsAddingNote(false)}>Cancel</button>
          </>
        ) : (
          <button className="flex justify-center items-center w-56 h-10 bg-[#8300C4] rounded-lg" onClick={() => setIsAddingNote(true)}><PlusCircleIcon className="h-6 w-6 text-white" /></button>
        )}
      </div>
    </>
  );
}

