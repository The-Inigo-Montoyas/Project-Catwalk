import React from 'react';
import axios from 'axios';
import sampleObj from '../Sample_data/single_product_metadata.js'
import StarGraph from './StarGraph.js'

class Breakdown extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      productId: 0
    }

    this.transformData = this.transformData.bind(this);

  }

  getProductMetadata(product_id) {
    axios.get('/products/metadata')
      .then( () => console.log(data))
      .catch( () => console.log(err));
  }

  transformData(dataObj) {
    //initialize the transformed data obj
    let results = {};

    //find the percentage of recommends
    let recommend = Number.parseInt(dataObj.recommended.true);
    let notRecommend = Number.parseInt(dataObj.recommended.false);
    results.pctRecommend = Math.round(100 * recommend / (recommend + notRecommend));

    //find the number of each star rating and the weighted average
    results.stars = {};
    results.totalReviews = 0;
    results.weightedTotal = 0;
    for (let i in dataObj.ratings) {
      results.stars[i] = Number.parseInt(dataObj.ratings[i]);
      results.totalReviews += results.stars[i];
      results.weightedTotal += results.stars[i] * Number.parseInt(i);
    }
    results.weightedAvg = (Math.round(10 * results.weightedTotal / results.totalReviews)) / 10;

    //save all the characteristics into the new obj
    results.characteristics = {};
    for ( var key in dataObj.characteristics) {
      results.characteristics[key] = dataObj.characteristics[key].value
    }

    return results;
  }

  render (props) {
    var goodData = this.transformData(sampleObj);
    console.log(goodData);
    return (
      <div>
        <h1>{goodData.weightedAvg}</h1>
        <div>
          <span className="star fa fa-star">Stars go here</span>
        </div>
        <p>{goodData.pctRecommend}% of reviews recommend this product</p>
        <StarGraph stars={goodData.stars} reviews={goodData.totalReviews}/>
      </div>
    )
  }
}

export default Breakdown;