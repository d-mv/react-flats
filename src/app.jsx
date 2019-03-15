import React, { Component } from 'react'

import Flats from './components/flats/flats'
import Map from './components/map/map'
import classes from './app.scss'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      flatSelected: [this.props.flats[0].lat, this.props.flats[0].lng]
    };
  }

  selectFlat = (flat) => {
    console.log(flat)
    this.setState({
      flatSelected: flat
    })
  }

  render () {
    return (
      <div>
        <div className="flat-list">
          <Flats selectFlat={this.selectFlat} flats={this.props.flats} />
        </div>
        <div className="map-container">
          <Map flatSelected={this.state.flatSelected} />
        </div>
      </div>
    );
  }
}
export default App