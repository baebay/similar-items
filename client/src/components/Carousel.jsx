import React from "react";
import Slider from "react-slick";
import "../style.css";
import Grid from '@material-ui/core/Grid';

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Carousel = props => {
  let similarItems = props.items;
  similarItems = shuffleArray(similarItems);
  let twelveItems = similarItems.slice(0, 12);
  const itemList = twelveItems.map((item,i) => {
    return (
      <div key={i} onClick={()=>(props.itemClicked(item.item_id))}>
        <img className='imgSimilar' src={item.item_image} />
        <p className='item_name'>{item.item_name}</p>
        <p className='item_price'>${item.item_price.toFixed(2)}</p>
        <p className='shipping'>{item.shipping}</p>
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
    <div>
      <Grid container>
        <Grid item xs={6} style={{paddingLeft: 20}}>
          <p className='containerTitle'>Similar sponsored items</p>
        </Grid>
        <Grid item xs={6} style={{paddingRight: 20}}>
          <a href="#" className='feedback'>Feedback on our suggestions</a>  
        </Grid>
      </Grid>

      <div className='containerSimilar'>
        <Slider {...settings}>
          {itemList}
        </Slider>
      </div>

    </div>
  );
};

export default Carousel;
