import React from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currItemID: 5,
      similarItems: []
    }
  }

  componentDidMount(){
    axios.get('/getItems',{params: {itemID:this.state.currItemID}})
    .then((response) => {
      this.setState({similarItems: response.data})
      console.log(this.state.similarItems)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <Carousel items = {this.state.similarItems}/>
    );
  }
}

export default App;