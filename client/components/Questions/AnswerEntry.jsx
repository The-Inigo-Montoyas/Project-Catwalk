import React from 'react';

const AnswerEntry = (props) => {
  return (
    <div className='answer-entry'>
      <span>A: This is an answer</span>
      <div className='user-info'>by (user), (date) | Helpful? Yes(count) | Report</div>
    </div>
  )
}

export default AnswerEntry;