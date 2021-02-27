import React from 'react';
import AnswerEntry from './AnswerEntry.jsx';

const AnswersList = (props) => {
  return (
    <div className='answer-list'>
      <div><AnswerEntry /> </div>
      <form className='load-answers'> 
        <input type="submit" value="Load More Answers" />
      </form>
    </div>
  )
}

export default AnswersList;