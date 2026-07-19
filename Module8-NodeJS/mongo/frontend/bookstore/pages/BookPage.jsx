import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import SkeletonCard from "../components/SkeletonCard";

const BookPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    pages: "",
    genre: "",
    rating: ""
  });

  useEffect(() => {
    const getBooks = async () => {
      try {
        console.log("Fetching books from backend...");
        const response = await fetch("http://localhost:3000/books?page=0");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Books fetched:", data);
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const bookData = {
        ...formData,
        pages: parseInt(formData.pages),
        rating: parseFloat(formData.rating)
      };
      console.log("Sending book data:", bookData);
      
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookData)
      });
      
      console.log("Response status:", response.status);
      const responseData = await response.json();
      console.log("Response data:", responseData);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${responseData.error || 'Unknown error'}`);
      }
      
      // Refresh the book list
      const booksResponse = await fetch("http://localhost:3000/books?page=0");
      const booksData = await booksResponse.json();
      setBooks(booksData);
      
      setFormData({ title: "", author: "", pages: "", genre: "", rating: "" });
      setShowCreateForm(false);
    } catch (error) {
      console.error("Error creating book:", error);
      alert(`Failed to create book: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 text-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-center text-white">
          Books List
        </h1>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {showCreateForm ? "Cancel" : "Add Book"}
        </button>
      </div>

      {showCreateForm && (
        <div className="bg-gray-800 p-6 rounded-lg mb-6 max-w-md mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">Create New Book</h2>
          <form onSubmit={handleCreate} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Pages</label>
              <input
                type="number"
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Genre</label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Rating</label>
              <input
                type="number"
                step="0.1"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Create Book
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {loading
          ? Array.from({ length: 10 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : books.map((book) => <BookCard key={book._id} book={book} />)}
      </div>
    </div>
  );
};

export default BookPage;
