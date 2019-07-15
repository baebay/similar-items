import React from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currItemID: 55,
      similarItems: []
    }
  }

  itemClicked(item_id) {
    console.log('item clicked',item_id);
    const event = new CustomEvent('setCurrentItem', { detail: { id: item_id }});
    document.dispatchEvent(event);
  }

  componentDidMount(){

    document.addEventListener('setCurrentItem', (event) => {
      console.log(event.detail.id)
      this.setState({currItemID: event.detail.id}, this.getSimilarItems)
    });

    this.getSimilarItems()
  }

  getSimilarItems(){
    axios.get('http://ec2-18-222-240-36.us-east-2.compute.amazonaws.com:3001/getItems',{params: {itemID:this.state.currItemID}})
    .then((response) => {
      console.log(this.state.currItemID)
      this.setState({similarItems: response.data})
      console.log(this.state.similarItems)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
      <Carousel itemClicked = {this.itemClicked} items = {this.state.similarItems}/>
      </div>
    );
  }
}

export default App;