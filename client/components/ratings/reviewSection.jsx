import React from 'react';
import reviews from '../Sample_data/SampleReviews.js';
import ReviewCard from './review-card.jsx';

const Reviews = function(props) {
  // check length of reviews section
  const DisplayReviews = () => {
    if (props.reviews.length === 0) {
      return (
        <div>No Reviews for this product yet</div>
      )
    } else if (props.reviews.length === 1) {
      return (
        <div>
          <ReviewCard review={props.reviews[0]} />
        </div>
      )
    } else {
      return (
        <div>
          <ReviewCard review={props.reviews[0]} />
          <ReviewCard review={props.reviews[1]} />
        </div>
      )
    }
  }

  return (
    <div>
      <label className="review-head" htmlFor="search-select"># of Reviews sorted by </label>
      <select id="search-select">
        <option value="relevance">relevance</option>
        <option value="helpfulness">helpfulness</option>
        <option value="newest">newest</option>
      </select>
      <DisplayReviews />
    </div>
  )
}

export default Reviews;