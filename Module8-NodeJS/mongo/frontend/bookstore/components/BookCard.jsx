import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link
      to={`/book/${book._id}`}
      className="bg-gray-700 w-full max-w-md p-4 rounded-lg shadow-md mb-4 flex flex-col space-y-2 hover:bg-gray-600 transition"
    >
      <div className="w-full h-32 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">
        {book.title.charAt(0)}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-white">{book.title}</h2>
        <p className="text-gray-300">By {book.author}</p>
        <p className="text-gray-400 text-sm">Genre: {book.genre}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-400 text-sm">{book.pages} pages</p>
          <p className="text-yellow-400 font-bold">★ {book.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
