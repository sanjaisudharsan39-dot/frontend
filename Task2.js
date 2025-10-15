import React, { useState } from "react";

const UpdateBook = () => {
  const [book, setBook] = useState({
    title: "The Last Starshippp",
    author: "James Brooks",
    genre: "Science Fiction"
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://92.205.109.210:8051/library/update/2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
      });

      if (response.ok) {
        setMessage("✅ Book updated successfully!");
      } else {
        setMessage("❌ Failed to update book.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("⚠️ Error updating the book.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Update Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          className="input"
        />

        <label>Author:</label>
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          className="input"
        />

        <label>Genre:</label>
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={handleChange}
          className="input"
        />

        <button type="submit" style={{ marginTop: "10px" }}>Update</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateBook;
