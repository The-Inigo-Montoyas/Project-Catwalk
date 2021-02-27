import React from 'react';

const AnswerEntry = (props) => {
  //console.log('answerEntry: ', props)
  return (
    <div className='answer-entry'>
      <span>A: {props.answer.body}</span>
      <div className='user-info'>by {props.answer.answerer_name}, {props.answer.date} | Helpful? Yes {props.answer.helpfulness} | Report</div>
    </div>
  )
}

export default AnswerEntry;