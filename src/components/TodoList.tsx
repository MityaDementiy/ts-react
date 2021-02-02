import React from 'react';

import '../App.css';
import { ITodo } from '../interfaces';

type TodoListProps = {
    todos: ITodo[],
    onToggle: (id: string) => void,
    onRemove: (id: string) => void,
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {
    if (todos.length === 0) {
        return <div>Запланированных дел нет</div>
    }
    return (
        <ul>
            {todos.map((todo) => {
                const classes = ['todo'];
                if (todo.completed) {
                    classes.push('completed');
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={() => onRemove(todo.id)}>Delete</i>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};