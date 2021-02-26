import React from 'react';
import axios from 'axios';
import sampleObj from '../Sample_data/single_product_metadata.js'

class Breakdown extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      productId: 0
    }

    //this. = this..bind(this);

  }

  getProductMetadata(product_id) {
    axios.get('/products/metadata')
      .then( () => console.log(data))
      .catch( () => console.log(err));
  }

  render (props) {
    console.log(sampleObj)
    return (
      <div>
        <h3>inside data breakdown component</h3>
      </div>
    )
  }
}

export default Breakdown;