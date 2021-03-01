import React from 'react';
import { useState } from 'react';
import RatingsApp from './ratings/RatingsApp.jsx';
import QuestionsList from './Questions/QuestionsList.jsx';
import ProductDetailsView from './productDetails/ProductDetailsView.jsx';
import ProductDescription from './productDetails/ProductDescription.jsx';
const axios = require('axios');
const TOKEN = require('../../config.js');

const App = () => {
  const [product, setProduct] = useState([]);

  const getOneProduct = () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sea/products', {
      headers: {
        Authorization: TOKEN,
      },
      params: {
        count: 1,
      },
    })
      .then((res) => {
        setProduct(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useState(getOneProduct);


  return (
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
        <ProductDetailsView product={product}/>
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
};

export default App;
