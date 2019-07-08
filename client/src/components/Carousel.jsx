import React from "react";
import Slider from "react-slick";
import "../style.css";

const Carousel = props => {
  let similarItems = props.items;
  let twelveItems = similarItems.slice(0, 12);
  const itemList = twelveItems.map(item => {
    return (
      <div>
        <img src={item.item_image} />
        <p className="item_name">{item.item_name}</p>
        <h3>$ {item.item_price}</h3>
        <p>{item.shipping}</p>
      </div>
    );
  });
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true
  };
  return (
    <div className='container'>
      <p>Similar sponsored items</p>
      <Slider {...settings}>{itemList}</Slider>
    </div>
  );
};

export default Carousel;
