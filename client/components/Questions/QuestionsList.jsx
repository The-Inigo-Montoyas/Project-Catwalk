// import React from 'react';
import AnswersList from './AnswersList.jsx';
import SearchBar from './SearchBar.jsx';
import QuestionEntry from './QuestionEntry.jsx';
import QuestionsData from '../Sample_data/QuestionsData.js';
import React, { useState } from 'react';

const QuestionsList = (props) => {
  const [data, setData] = useState(QuestionsData.results);
  // console.log('questionsList data: ', data);
  return (
    <div>
      <h3>Questions & Answers</h3>
      <div>
        <SearchBar />
      </div>
      <div>
        {data.map((question, idx) =>
          <QuestionEntry key={question + idx} question={question}/>
        )}
      </div>
      <form>
        <input type='submit' value='More Answered Questions' />
        <input type='submit' value='Add A Question +' />
      </form>
    </div>
  )
}

export default QuestionsList;