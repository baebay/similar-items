import React from 'react';
import Slider from 'react-slick';
import '../style.css'

const Carousel = (props) => {
  console.log(props.items)
  let twelveItems = props.items.slice(0,12)
  const itemList = twelveItems.map((item) => {
    return (
    <div>
      <img src={item.item_image} height={200}></img>
      <p>{item.item_name}</p>
      <h3>$ {item.item_price}</h3>
    </div>
    )
  })
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows:true
  };
  return (
    <div>
    <p>Similar sponsored items</p>
    <Slider {...settings}>
      {itemList}
    </Slider>
    </div>
  );
}

export default Carousel;