import React from 'react';
import Breakdown from './data-breakdown.js';

const RatingsApp = (props) => (
  <div className="ratings-module">
    <h3>Ratings &amp; Reviews</h3>
    <Breakdown />
    <button type="submit" className="big-review-btn">More Reviews</button>
    <button type="submit" className="big-review-btn">Add A Review +</button>
  </div>
)

export default RatingsApp;