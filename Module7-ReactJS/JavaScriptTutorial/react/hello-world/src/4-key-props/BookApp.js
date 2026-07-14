import Book from './Book';
import MasteringReact from '../assets/mastering react.svg';
import PracticalReact from '../assets/practical react.svg';
import ReactInAction from '../assets/react in action.svg';

const KeyProps = () => {
    // Step 1 — store data in an array of objects
    const books = [
        { title: 'Mastering React',  author: 'Anthony Pham',  cover: MasteringReact  },
        { title: 'Practical React',  author: 'Alex Johnson',  cover: PracticalReact  },
        { title: 'React in Action',  author: 'Bob Climo',     cover: ReactInAction   },
    ];

    // Step 2 — transform the array into an array of components
    const renderedBooks = books.map((book) => {
        return (
            <Book
                key={crypto.randomUUID()}
                title={book.title}
                author={book.author}
                cover={book.cover}
            />
        );
    });

    // Step 3 — render the list
    return (
        <main>
            <h1><u>Rendering list using key props</u></h1>
            <h2>Favourite Books</h2>
            <div className="book-list">{renderedBooks}</div>
        </main>
    );
};

export default KeyProps;