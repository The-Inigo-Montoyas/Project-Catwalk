import React from 'react';

const ProductDetails = (props) => (
  <div id="productView">
    <div>ratings component</div>
    {console.log('this is product', props.product)}
    <span>{props.product.category}</span>
    <h1>{props.product.name}</h1>
    <div>
      <span>$price</span>
      <span> discounted price</span>
    </div>
    <div>
      STYLE &gt; SELECTED STYLE
    </div>
    <div className="styleView">
      <div>style row 1</div>
      <div>style row 2</div>
    </div>
    <select id="sizeBar" name="SELECT SIZE">
      <option value="">-</option>
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <select id="qtyBar" className="m20" name="QUANTITY">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <div className="flexSpaceBetween">
      <div id="addToBag" className="m20">
        <span>ADD TO BAG</span>
        <span className=""> +</span>
      </div>
      <div className="star m20">
        *
      </div>
    </div>
  </div>
);

export default ProductDetails;
