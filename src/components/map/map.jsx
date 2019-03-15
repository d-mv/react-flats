import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker'
class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: this.props.flatSelected[0],
        lng: this.props.flatSelected[1]
      },
      zoom: 11,
    };
  }

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: ""
          }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <Marker
            lat={this.props.flatSelected[0]}
            lng={this.props.flatSelected[1]}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
