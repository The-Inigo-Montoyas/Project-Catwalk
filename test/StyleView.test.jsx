import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import StyleView from '../client/components/productDetails/StyleView';

const product = { };
const styles = {
  "style_id": 110104,
  "name": "Lime",
  "original_price": "589.00",
  "sale_price": null,
  "default?": true,
  "photos": [
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1479756212843-6314ad5121dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      }
  ],
  "skus": {
      "639054": {
          "quantity": 16,
          "size": "One Size"
      }
  }
},
{
  "style_id": 110105,
  "name": "Teal",
  "original_price": "589.00",
  "sale_price": null,
  "default?": false,
  "photos": [
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1544131750-2985d621da30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1542702942-161ceb2e3d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
      }
  ],
  "skus": {
      "639055": {
          "quantity": 30,
          "size": "One Size"
      }
  }
},
{
  "style_id": 110106,
  "name": "Blue",
  "original_price": "589.00",
  "sale_price": null,
  "default?": false,
  "photos": [
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
      }
  ],
  "skus": {
      "639056": {
          "quantity": 55,
          "size": "One Size"
      }
  }
},
{
  "style_id": 110107,
  "name": "Silver",
  "original_price": "743.00",
  "sale_price": null,
  "default?": false,
  "photos": [
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1422728221357-57980993ea99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80"
      }
  ],
  "skus": {
      "639057": {
          "quantity": 56,
          "size": "One Size"
      }
  }
},
{
  "style_id": 110108,
  "name": "Orchid",
  "original_price": "589.00",
  "sale_price": null,
  "default?": false,
  "photos": [
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1523296357416-a4b3c4b9ee65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      }
  ],
  "skus": {
      "639058": {
          "quantity": 23,
          "size": "One Size"
      }
  }
},
{
  "style_id": 110109,
  "name": "Orange",
  "original_price": "646.00",
  "sale_price": null,
  "default?": false,
  "photos": [
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1465124982537-9f918f1e1aaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1477420143023-6a0e0b04b69a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      }
  ],
  "skus": {
      "639059": {
          "quantity": 49,
          "size": "One Size"
      }
  }
},
{
  "style_id": 110110,
  "name": "Plum",
  "original_price": "589.00",
  "sale_price": "303.00",
  "default?": false,
  "photos": [
      {
          "thumbnail_url": "https://images.unsplash.com/photo-1556812191-381c7e7d96d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
          "url": "https://images.unsplash.com/photo-1542818212-9899bafcb9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80"
      }
  ],
  "skus": {
      "639060": {
          "quantity": 37,
          "size": "One Size"
      }
  }
};
const selectedStyle = 0;
const handleStyleClick = () => {};


test('test StyleView Component', () => {
  render(<StyleView
    product={product}
    styles={styles}
    selectedStyle={selectedStyle}
    handleStyleClick={handleStyleClick}
  />);

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.queryByText(selectedStyle)).toBe(0);

  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  // fireEvent.click(screen.getByLabelText(/show/i))

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  // expect(screen.getByText(testMessage)).toBeInTheDocument()
})