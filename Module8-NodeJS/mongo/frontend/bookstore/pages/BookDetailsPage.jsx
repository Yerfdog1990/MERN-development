import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    pages: "",
    genre: "",
    rating: ""
  });

  // Read book details
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await fetch(`http://localhost:3000/books/${id}`);
        const data = await response.json();
        setBook(data);
        setFormData({
          title: data.title || "",
          author: data.author || "",
          pages: data.pages || "",
          genre: data.genre || "",
          rating: data.rating || ""
        });
      } catch (error) {
        console.error("Error fetching book details:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, [id]);

  // Delete book
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        await fetch(`http://localhost:3000/books/${id}`, {
          method: "DELETE"
        });
        navigate("/");
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  // Update book
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const bookData = {
        ...formData,
        pages: parseInt(formData.pages),
        rating: parseFloat(formData.rating)
      };
      console.log("Updating book with data:", bookData);
      
      const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookData)
      });
      
      console.log("Update response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error || 'Unknown error'}`);
      }
      
      const result = await response.json();
      console.log("Update result:", result);
      
      setIsEditing(false);
      const bookResponse = await fetch(`http://localhost:3000/books/${id}`);
      const updatedBook = await bookResponse.json();
      setBook(updatedBook);
    } catch (error) {
      console.error("Error updating book:", error);
      alert(`Failed to update book: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center p-6 text-gray-100">
      <Link
        to="/"
        className="text-blue-400 hover:underline self-start mb-4 font-semibold"
      >
        ← Back to Books
      </Link>

      {loading ? (
        <div className="bg-gray-700 w-full max-w-md p-6 rounded-lg mt-6">
          <Skeleton height={24} width="50%" />
          <Skeleton height={20} width="70%" className="mt-2" />
          <Skeleton height={16} width="60%" className="mt-2" />
        </div>
      ) : (
        <div className="bg-gray-800 w-full max-w-md p-6 rounded-lg shadow-md mt-6">
          {isEditing ? (
            <form onSubmit={handleUpdate} className="space-y-4">
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
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h2 className="text-xl font-bold text-white mb-2">{book.title}</h2>
              <p className="text-gray-300 mb-1">
                <strong className="text-gray-100">Author:</strong> {book.author}
              </p>
              <p className="text-gray-300 mb-1">
                <strong className="text-gray-100">Pages:</strong> {book.pages}
              </p>
              <p className="text-gray-300 mb-1">
                <strong className="text-gray-100">Genre:</strong> {book.genre}
              </p>
              <p className="text-gray-300 mb-1">
                <strong className="text-gray-100">Rating:</strong>{" "}
                <span className="text-yellow-400">★ {book.rating}</span>
              </p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BookDetailsPage;
