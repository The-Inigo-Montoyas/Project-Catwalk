import React from 'react';
import RatingsApp from './ratings/RatingsApp.jsx';
import QuestionsList from './Questions/QuestionsList.jsx';
import ProductDetailsView from './productDetails/ProductDetailsView.jsx';
import ProductDescription from './productDetails/ProductDescription.jsx';

const App = () => (
  <div className="">
    <div className="gridContainer gridMainTemplate">
      <div className="gridSpacer" />
      <div className="header">
        <div className="inner-header">
          <img className="logo-img" src="./img/ankylosaur1.jpg" alt="logo" />
          <p className="logo">Agile Creations</p>
          <input className="logo-search" placeholder="search..." />
        </div>
      </div>
      <div className="gridSpacer" />
      <div className="gridSpacer" />
      <ProductDetailsView />
      <div className="gridSpacer" />
      <div className="gridSpacer" />
      <ProductDescription />
      <div className="gridSpacer" />
      <div className="gridSpacer" />
      <div id="questions-answers">
        <QuestionsList />
      </div>
      <div className="gridSpacer" />
      <div className="gridSpacer" />
      <div id="reviews-ratings">
        <RatingsApp />
      </div>
      <div className="gridSpacer" />
    </div>
  </div>
);

export default App;
