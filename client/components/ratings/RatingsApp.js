import React from 'react';
import Breakdown from './data-breakdown.js';

const RatingsApp = (props) => (
  <div className="ratings-module">
    <h4>Ratings &amp; Reviews</h4>
    <div className="metadata-sidebar">
      <Breakdown />
    </div>
    <div className="reviews">
      <div>
        <span>Reviews will go here</span>
        <button type="submit" className="big-review-btn">More Reviews</button>
        <button type="submit" className="big-review-btn">Add A Review +</button>
      </div>
    </div>
  </div>
)

export default RatingsApp;