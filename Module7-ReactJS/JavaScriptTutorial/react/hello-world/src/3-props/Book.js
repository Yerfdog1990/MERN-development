// Book item component — accepts props and renders a single book
const Book = ({ title, cover, author }) => {
    return (
        <section className="book">
            <img src={cover} alt={title} className="book-cover" />
            <h2 className="book-title">{title}</h2>
            <p className="book-author">By {author}</p>
        </section>
    );
};

export default Book;