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

  testOnClick () {
    console.log('clicked');
    const event = new CustomEvent('currentItem', { detail: { id: 55 }});
    document.dispatchEvent(event);
  }

  componentDidMount(){

    document.addEventListener('currentItem', (event) => {
      console.log(event.detail.id)
      this.setState({currItemID: event.detail.id})
    });

    axios.get('/getItems',{params: {itemID:this.state.currItemID}})
    .then((response) => {
      this.setState({similarItems: response.data})
      console.log(this.state.similarItems)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // componentDidUpdate(){
  //   axios.get('/getItems',{params: {itemID:this.state.currItemID}})
  //   .then((response) => {
  //     console.log(this.state.currItemID)
  //     this.setState({similarItems: response.data})
  //     console.log(this.state.similarItems)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }

  render () {
    return (
      <div>
      <button onClick = {this.testOnClick}>Click Me</button>
      <Carousel items = {this.state.similarItems}/>
      </div>
    );
  }
}

export default App;