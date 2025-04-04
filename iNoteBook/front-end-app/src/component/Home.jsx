import React, { useState } from 'react';

const Home = () => {
    const [note, setNote] = useState('');
    const [todo, setTodo] = useState('');
    const [notes, setNotes] = useState([]);
    const [todos, setTodos] = useState([]);

    // Handle adding a new note
    const addNote = () => {
        if (note) {
            setNotes([...notes, note]);
            setNote('');
        }
    };

    // Handle adding a new todo
    const addTodo = () => {
        if (todo) {
            setTodos([...todos, todo]);
            setTodo('');
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">iNotebook</h1>

            {/* Notes Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Your Notes</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Write a new note..."
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <button
                        onClick={addNote}
                        className="mt-2 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Add Note
                    </button>
                </div>
                <ul className="space-y-2">
                    {notes.map((note, index) => (
                        <li key={index} className="p-2 border border-gray-300 rounded-md bg-gray-50">
                            {note}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Todo Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">Your To-Do List</h2>
                <div className="mb-4">
                    <input
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder="Add a new todo..."
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <button
                        onClick={addTodo}
                        className="mt-2 w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
                    >
                        Add Todo
                    </button>
                </div>
                <ul className="space-y-2">
                    {todos.map((todo, index) => (
                        <li key={index} className="p-2 border border-gray-300 rounded-md bg-gray-50">
                            {todo}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;
