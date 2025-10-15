import React, { useEffect, useState } from 'react';

const API_BASE = "http://92.205.109.210:8051/library";

const LibraryCrud2 = () => {
    const [book, setBooks ] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        genre :"",
    }); 
    const [editId, setEditId ] = useState(null);

    const fetchBooks = () => {
        fetch(`${API_BASE}/getall`)
        .then((res) => res.json())
        .then((data) => setBooks(data))
        .catch((err) => console.error("Error fetching Books:",err));
    };
    useEffect(() => {
        fetchBooks();
    },[]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev,[name]:value}));
    };
    const handleAddBook = () => {
        if(!formData.title || !formData.author || !formData.genre) {
            alert("Please fill in all fields!");
            return;
        }
        fetch(`${API_BASE}/create`,{
            method:"POST",
            headers:{"Constent-type":"application/json"},
            body:JSON.stringify(formData),
        })
            .then((res) => {
                if(res.ok){
                    alert("✅ Book added successfully!");
                    fetchBooks();
                    setFormData({title:"", author:"", genre:""});
                }else{
                    alert("Failed to add book.");
                }
            })
            .catch((err) => console.error(err));
    };
    const handleEdit = (book) => {
        setFormData({
            title:book.title,
            author:book.author,
            genre:book.genre,
        });
        setEditId(book.bookId);
    };
    const handleUpdateBook =() => {
        fetch(`${API_BASE}/update/${editId}`,{
            method:"PUT",
            headers:{"Content-type":"appliction/json"},
            body:JSON.stringify(formData),
        })
        .then((res) => {
            if(res.ok){
                alert("Book updated successfully!!!!......")
                fetchBooks();
                setEditId(null);
                setFormData({title:"",author:"",genre:""});
            }
            else{
                alert("failed to update book.");
            }
        })
        .catch((err) => console.error(err));
    };
    const handleDeleteBook =(id) => {
        if(window.confirm("Are you sure you want to delete this book")){
            fetch(`${API_BASE}/delete/${id}`,{
                method:"DELETE",
            })
            .then((res) => {
                if(res.ok){
                    alert("Book deleted successfully!!!...");
                    fetchBooks();
                }else{
                    alert("Failed to delete book.");
                }
            })
            .catch((err) => console.errror(err));
        }
    }

  return (
    <div className='"library-container'>
        <h2>Library Crud application</h2>
    <div className='form-section'>
        <input type='text' name='title' placeholder='Book Title' value = {formData.title} onChange = {handleChange}/>
        <input type='text' name='Author' placeholder='Author' value = {formData.author} onChange = {handleChange}/>
        <input type='text' name='genre' placeholder='genre' value = {formData.genre} onChange = {handleChange}/>
        {editId ? (
            <button className='update-btn' onClick={handleUpdateBook}>
                Update Book
            </button>
        ) : (
            <button className='add-btn' onClick={handleAddBook}>
                Add Book
            </button>
        )}
    </div>
    <table className='book-table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>genre</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
                {book.length > 0 ? (
                    book.map((book) => (
                      <tr key = {book.bookId}>
                        <td>{book.bookId}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.genre}</td>
                        <td>
                            <button className='edit-btn' onClick={() => handleEdit(book)}>Edit</button>
                            <button className='delete-btn' onClick={() => handleDeleteBook(book.bookId)}>Delete</button>
                        </td>
                      </tr>  
                    ))
                    ):(
                        <tr>
                            <td colSpan="5">No books found</td>
                        </tr>
                )}
        </tbody>
    </table>
      
    </div>
  );
};

export default LibraryCrud2;
