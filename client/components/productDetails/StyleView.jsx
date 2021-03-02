import React from 'react';

const StyleView = props => {
  const { product, styles, currentStyle } = props;
  // console.log(product, styles);

  return (
    <div>
      {styles.map((style, idx) => {
        // {console.log(style)}
        return (
          <img
            id={style.style_id}
            alt={style.name + product.name}
            src={style.photos[0].thumbnail_url}
            className="styleThumbnail"
            key={style.style_id}
          />)
      })}
      styles view
    </div>
  );

};

export default StyleView;
