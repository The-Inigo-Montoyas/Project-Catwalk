import React from 'react';
import RatingsApp from './ratings/RatingsApp.js'
import QuestionsList from './Questions/QuestionsList.jsx';

const App = (props) => (
  <div>
    Hello World from App
    <div id="productDetail">
      this is the product view
    </div>
    <div id="reviews-ratings">
      <RatingsApp />
    </div>
    <div id="questions_answers">
      <QuestionsList />
    </div>
  </div>
)

export default App;