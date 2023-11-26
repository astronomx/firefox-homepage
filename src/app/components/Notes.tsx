'use client'
import React, { useState, useEffect } from 'react';
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Notes() {
  const [notes, setNotes] = useState<{ text: string; timestamp: number }[]>([]);
  const [newNote, setNewNote] = useState<string>('');
  const [isAddingNote, setIsAddingNote] = useState<boolean>(false);

  // Load notes from local storage on component mount
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Save notes to local storage whenever the 'notes' state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() !== '') {
      const newNoteObject = { text: newNote, timestamp: Date.now() };
      setNotes([...notes, newNoteObject]);
      setNewNote('');
      setIsAddingNote(false);
    }
  };

  const deleteNote = (index: number) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return date.toLocaleDateString('nl-NL', options); // Adjust this based on your date and time format preferences
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      addNote();
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold">Notes</h1>
        <ul>
          {notes.map((note, index) => (
            <div key={index} className="mb-3">
              <li className="flex flex-col text-lg bg-[#FF9EFF] p-2 rounded-lg w-80 break-all">
                <span>{formatTimestamp(note.timestamp)}</span>

                <div className="flex items-center">
                  <span>{note.text}</span>

                  <button onClick={() => deleteNote(index)}>
                    <TrashIcon className="h-4 w-4 text-white" />
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        {isAddingNote ? (
          <div className="flex flex-col space-y-4 mt-5">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-80 h-10 rounded-lg drop-shadow-xl text-black px-4 break-all"
            />
            <div className="flex justify-center">
              <button className="bg-[#FF9EFF] px-4 py-1 rounded-lg" onClick={() => setIsAddingNote(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button className="flex justify-center items-center w-80 h-10 bg-[#8300C4] rounded-lg drop-shadow-xl mt-5" onClick={() => setIsAddingNote(true)}>
            <PlusCircleIcon className="h-6 w-6 text-white" />
          </button>
        )}
      </div>
    </>
  );
}

