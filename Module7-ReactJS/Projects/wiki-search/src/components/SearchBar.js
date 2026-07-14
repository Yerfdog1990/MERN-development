import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="searchTerm"
        id="searchTerm"
        placeholder="Enter a search term..."
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;
