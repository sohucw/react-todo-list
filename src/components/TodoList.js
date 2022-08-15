import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
const initData = [
  {
    id: Math.floor(Math.random() * 10000),
    text: "Test",
    isComplete: true,
  },
  {
    id: Math.floor(Math.random() * 10000),
    text: "组件设计",
    isComplete: false,
  },
  {
    id: Math.floor(Math.random() * 10000),
    text: "数据状态设计",
    isComplete: false,
  },
  {
    id: Math.floor(Math.random() * 10000),
    text: "万能公式",
    isComplete: false,
  },
  {
    id: Math.floor(Math.random() * 10000),
    text: "React VS Vue",
    isComplete: false,
  },
];
function TodoList() {
    const [todos, setTodos] = useState (initData);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);        
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos (updatedTodos);
    }

    return (
        <div>
            <h1>数据状态设计和组件设计</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList;