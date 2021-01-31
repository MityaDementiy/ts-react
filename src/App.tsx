import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: title,
      completed: false,
    }
    setTodos((prev) => [newTodo, ...prev]);
    console.log(todos)
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={handleAdd} />
        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default App;
