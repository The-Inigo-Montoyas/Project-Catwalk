import React from 'react';
import ProductDetails from './ProductDetails.jsx';

const ProductDetailsView = (props) => (
  <div id="productContainer" className="border">
    <div id="productImageView" className="border">
      <div id="imgViewerComponent">
        { <img id="imgNormalView" src="https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"></img> }
      </div>
      <ProductDetails product={props.product} styles={props.styles} />
    </div>
  </div>
);

export default ProductDetailsView;
