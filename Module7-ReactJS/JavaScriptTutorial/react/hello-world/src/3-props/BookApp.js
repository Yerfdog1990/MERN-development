import Book from './Book';
import MasteringReact from '../assets/mastering react.svg';
import PracticalReact from '../assets/practical react.svg';
import ReactInAction from '../assets/react in action.svg';
import '../index.css';

const BookApp = () => {
    return (
        <main>
            <h1><u>Learning React Props</u></h1>
            <h2>Favourite Books</h2>
            <div className="book-list">
                <Book title="Mastering React" author="Anthony Pham" cover={MasteringReact} />
                <Book title="Practical React" author="Alex Johnson" cover={PracticalReact} />
                <Book title="React in Action" author="Bob Climo" cover={ReactInAction} />
            </div>
        </main>
    );
};

export default BookApp;

