import React from 'react';
import moment from 'moment';

const ReviewCard = function(props) {
  const StarRating = () => {
    for (let i = 0; i < props.review.rating; i++) {
      starArray[i] = <span className="star-shape" style={{'backgroundColor': "#074b36"}}></span>
    }
    for (let j = props.review.rating; j < 5; j++) {
      starArray[j] = <span className="star-shape"></span>
    }
  }
  const Recommend = () => {
    if (props.review.recommend) {
      return <span className="review-body">I recommend this item.</span>
    } else {
      return <></>
    }
  }
  const Response = () => {
    if (props.review.response) {
      return (
        <div className="review-response">
          <div className="review-response" style={{'fontWeight': 'bold'}}>Response:</div>
          <span className="review-response">{props.review.response}</span>
        </div>
      )
    } else {
      return <></>
    }
  }
  return (
    <div>
      <span style={{'padding': '10px 0'}}>
        {[...Array(5)].map( (item, index) => {
          if (index < props.review.rating) {
            return (
              <span key={props.review.date + index}
                className="star-shape"
                style={{'backgroundColor': "#074b36"}}>
              </span>
            );
          } else {
            return (
              <span key={props.review.date + index}
                className="star-shape">
              </span>
            );
          }
        })}
      </span>
      <span className="review-info">
        {props.review.reviewer_name},   {moment(props.review.date).format('LL')}
      </span>
      <div className="review-summary">{props.review.summary}</div>
      <div className="review-body">{props.review.body}</div>
      <Recommend />
      <Response />
      <div className="review-help">Helpful? Yes ({props.review.helpfulness})  |  Report</div>
    </div>
  )
}

export default ReviewCard;