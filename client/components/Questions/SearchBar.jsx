import React from 'react';

const SearchBar = (props) => {
  return (
    <form className='searchbar'>
      <label>
        <input type="text" name="name" placeholder="Have a question? Search for Answers"/>
      </label>
    </form>
  )
}

export default SearchBar; 