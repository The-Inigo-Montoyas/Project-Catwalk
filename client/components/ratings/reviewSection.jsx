import React from 'react';
import reviews from '../Sample_data/SampleReviews.js';
import ReviewCard from './review-card.jsx';

const Reviews = function(props) {
  return (
    <div>
      <label className="review-head" htmlFor="search-select"># of Reviews sorted by </label>
      <select id="search-select">
        <option value="relevance">relevance</option>
        <option value="helpfulness">helpfulness</option>
        <option value="newest">newest</option>
      </select>
      <div>
        <ReviewCard review={reviews.results[0]} />
        <ReviewCard review={reviews.results[1]} />
      </div>
    </div>
  )
}

export default Reviews;