import React from 'react';
import RatingsApp from './ratings/RatingsApp.js'
import QuestionsList from './Questions/QuestionsList.jsx';

const App = (props) => (
  <div>
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
            STYLE > SELECTED STYLE
          </div>
          <div className="styleView">
            <div>style row 1</div>
            <div>style row 2</div>
          </div>
          <select name="SELECT SIZE">
            <option value="">-</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <select name="QUANTITY">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <div className="flexSpaceBetween">
            <div id="addToBag" className="flexAuto1">
              <span className="">ADD TO BAG</span>
              <span className=""> +</span>
            </div>
            <div className="star">
              STAR
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="reviews-ratings">
      <RatingsApp />
    </div>
    <div id="questions_answers">
      <QuestionsList />
    </div>
  </div>
)

export default App;