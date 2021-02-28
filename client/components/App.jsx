import React from 'react';
import RatingsApp from './ratings/RatingsApp.js'

const App = (props) => (
  <div>
    Hello World from App
    <div id="productDetail">
      this is the product view
    </div>
    <div id="reviews-ratings">
      <RatingsApp />
    </div>
  </div>
)

export default App;