import React from 'react';
import RatingsApp from './ratings/RatingsApp.js'
import QuestionsList from './Questions/QuestionsList.jsx';

const App = () => (
  <div className="gridContainer">
    <div className="header">
      <div className="inner-header">
        <img className="logo-img" src="./img/ankylosaur1.jpg" alt="logo" />
        <p className="logo">Agile Creations</p>
        <input className="logo-search" placeholder="search..." />
      </div>
    </div>
    <div id="productContainer" className="border">
      <div id="productImageView" className="border">
        <div id="imgViewerComponent">
          <img id="imgNormalView" src="https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"></img>
        </div>
        <div id="productView">
          this is the product view
          <div>this is the rating component</div>
          <span>CATEGORY</span>
          <h1>Expanded product name</h1>
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
      </div>
    </div>
    <div className="gridSpacer gridFracOne" />
    <div id="productDiscContainer">Product disc</div>
    <div id="reviews-ratings">
      <RatingsApp />
    </div>
    <div id="questions-answers">
      <QuestionsList />
    </div>
  </div>
);

export default App;
