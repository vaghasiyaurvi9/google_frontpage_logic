import React, { useEffect, useState } from 'react'
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e) => {
    const results = [
      { title: 'amazon', url: 'https://www.amazon.in/' },
      { title: 'flipkart', url: 'https://www.flipkart.com/' },
      { title: 'meesho', url: 'https://www.meesho.com/' },
    ];
    setSearchResults(results);
  };

  const handleSearchData = (e) => {
    if(e.length > 0)
    {
      let Data = searchResults.filter(el =>
        el.title.toLowerCase().includes(e)
      )
      setSearchResults(Data)
    }else{
      const results = [
        { title: 'amazon', url: 'https://www.amazon.in/' },
        { title: 'flipkart', url: 'https://www.flipkart.com/' },
        { title: 'meesho', url: 'https://www.meesho.com/' },
      ];
      setSearchResults(results);
    }
  }
  return (
    <div className="App">
      <div className="App">
        <div id="logo">
          <img src="google_logo.png" alt="Google Logo" />
        </div>
        <input
          type="text"
          // value={searchQuery}
          onChange={(e) => handleSearchData(e.target.value)}
          onClick={handleSearch}
          placeholder="Search Google..."
        />
        <div id="search-results">
          {  searchResults.map((result, index) => (

            <div className="search-result" key={index}>
              <a href={result.url}>{result.title}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
