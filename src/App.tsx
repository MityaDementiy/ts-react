import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';


const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const handleAdd = (title: string) => {
    console.log('new todo', title);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={handleAdd} />
      </div>
    </>
  );
}

export default App;
