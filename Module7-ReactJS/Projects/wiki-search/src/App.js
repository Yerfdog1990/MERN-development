import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ArticleList from './components/ArticleList';
import { search } from './api';
import './App.css';
import logo from './wikipedia-logo.png';

const App = () => {
  const [articles, setArticles] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await search(searchTerm);
    setArticles(results);
  };

  return (
    <>
      <header>
        <img src={logo} alt="wikipedia" />
        <h1>Wikipedia Search</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main id="searchResult">
        <ArticleList articles={articles} />
      </main>
    </>
  );
};

export default App;
