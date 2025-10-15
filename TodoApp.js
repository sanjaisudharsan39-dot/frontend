import React, { useReducer, useState } from "react";

// 1️⃣ Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    case "CLEAR_ALL":
      return [];

    default:
      return state;
  }
};

const initialTodos = [];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div style={styles.container}>
      <h1 style={{color:"rgba(211, 66, 66, 1)"}}> Todo List </h1>

      <div style={styles.inputSection}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new todo..."
        />
        <button style={styles.addBtn} onClick={addTodo}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              ...styles.item,
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "gray" : "black",
            }}
          >
            <span onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}>
              {todo.text}
            </span>
            <button
              style={styles.deleteBtn}
              onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button style={styles.clearBtn} onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          Clear All
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  inputSection: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "250px",
    marginRight: "10px",
    borderRadius: "8px",
    color:"voilet",
    border: "5px solid #e484ecff",
  },
  addBtn: {
    padding: "10px 15px",
    borderRadius: "8px",
    backgroundColor: "#3a14a1d7",
    color: "white",
    fontSize:"1rem",
    border: "none",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    width: "300px",
    margin: "auto",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
  },
  deleteBtn: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "18px",
  },
  clearBtn: {
    marginTop: "20px",
    backgroundColor: "rgba(255, 34, 255, 0.8)",
    color: "black",
    padding: "8px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default TodoApp;
