import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  //state iniysh w/o constructor
 state = { 
        lat: null, 
        errorMessage: '' 
    }

  //on first render, perform this 'data load,' and determine the user's locaysh
  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render () {
    //condiysh rendering of <div>stateContent</div>
    if (this.state.errorMessage && !this.state.lat) return <div>Error: { this.state.errorMessage }</div>
    if (!this.state.errorMessage && this.state.lat) return <div>Latitude: { this.state.lat }</div> 
    return <div>Loading!</div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))