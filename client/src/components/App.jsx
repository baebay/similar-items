import React from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor () {
    super();
  }

  componentDidMount(){
    axios.get('/getItems')
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <Carousel />
    );
  }
}

export default App;