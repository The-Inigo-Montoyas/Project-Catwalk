import React from 'react';
import AnswersList from './AnswersList.jsx';
import SearchBar from './SearchBar.jsx';
import QuestionEntry from './QuestionEntry.jsx';

const QuestionsList = (props) => {
  return (
    <div>
      <h3>Questions & Answers</h3>
      <div>
        <SearchBar />
      </div>
      <div>
        <QuestionEntry />
      </div>
      <div>
        <AnswersList />
      </div>
      <form>
        <input type='submit' value='More Answered Questions' />
        <input type='submit' value='Add A Question +' />
      </form>
    </div>
  )   
}

export default QuestionsList;