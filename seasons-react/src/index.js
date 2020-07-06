import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

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
    //condiysh rendering:

      //if there is no lat property
    if (this.state.errorMessage && !this.state.lat) return <div>Error: { this.state.errorMessage }</div>
      //if there is a lat property
    if (!this.state.errorMessage && this.state.lat) return <SeasonDisplay lat={ this.state.lat }/>
      //while we wait to see if there is, or is not, a lat property
    return <div>Loading!</div>
    
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))