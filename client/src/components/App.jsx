import React from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currItemID: 5,
      items: []
    }
  }

  componentDidMount(){
    axios.get('/getItems',{params: {itemID:this.state.currItemID}})
    .then((response) => {
      this.setState({items: response.data})
      console.log(this.state.items)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <Carousel items = {this.state.items}/>
    );
  }
}

export default App;