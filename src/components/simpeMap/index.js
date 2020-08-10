import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text }) => <div><h1>{text}</h1></div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: AIzaSyClNsEyR4b1rH5mmoc0Nk5niu9aEomPYpA }}
          apiKey = "AIzaSyClNsEyR4b1rH5mmoc0Nk5niu9aEomPYpA"
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <MapMarker
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;