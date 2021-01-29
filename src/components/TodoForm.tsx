import React from 'react';
import '../App.css';

export const TodoForm: React.FC = () => {
  return (
    <div className="input-field pd-top-20">
      <input type="text" id="title" placeholder="Введите название дела"/>
      <label htmlFor="title" className="active pd-top-20">Введите название дела</label>
    </div>
  );
};