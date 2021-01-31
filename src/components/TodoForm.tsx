import React, { useState } from 'react';
import '../App.css';

interface TodoFormProps {
  onAdd(title: string): void,
};

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setTitle('');
      onAdd(title);
    }
  };

  return (
    <div className="input-field pd-top-20">
      <input 
        type="text" 
        id="title" 
        placeholder="Введите название дела"
        value={title}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <label htmlFor="title" className="active pd-top-20">Введите название дела</label>
    </div>
  );
};