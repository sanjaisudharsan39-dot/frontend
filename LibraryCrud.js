import React, { useEffect, useState } from "react";


const API_URL = "http://92.205.109.210:8051/library";

const LibraryCrud = () => {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    bookId: "",
    title: "",
    author: "",
    category: "",
    available: true,
  });
  const [editMode, setEditMode] = useState(false);

  const fetchBooks = () => {
    fetch(`${API_URL}/getall`)
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "available" ? value === "true" : value,
    }));
  };

  const handleAdd = () => {
    fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Book added successfully!");
          fetchBooks();
          setFormData({
            bookId: "",
            title: "",
            author: "",
            category: "",
            available: true,
          });
        } else {
          alert("Failed to add book!");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleEdit = (book) => {
    setFormData(book);
    setEditMode(true);
  };

  const handleUpdate = () => {
    fetch(`${API_URL}/update/${formData.bookId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Book updated successfully!");
          setEditMode(false);
          fetchBooks();
          setFormData({
            bookId: "",
            title: "",
            author: "",
            category: "",
            available: true,
          });
        } else {
          alert("Failed to update book!");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      fetch(`${API_URL}/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            alert("Book deleted successfully!");
            fetchBooks();
          } else {
            alert("Failed to delete book!");
          }
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="library-container">
      <h2>📚 Library Book Management</h2>

      <div className="form-section">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <select
          name="available"
          value={formData.available}
          onChange={handleChange}
        >
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>

        {editMode ? (
          <button className="update-btn" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
        )}
      </div>

      <table className="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book) => (
              <tr key={book.bookId}>
                <td>{book.bookId}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>{book.available ? "true" : "false"}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(book)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(book.bookId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No books available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryCrud;
