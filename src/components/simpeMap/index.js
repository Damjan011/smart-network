import React, { Component } from 'react';
import './style.css';
import GoogleMapReact from 'google-map-react';
import MapPin from '../../assets/images/map-pin.png';

const MapMarker = ({ text }) => <div className="ui-marker"><div className="damjan"></div><img className="ui-map-pin" src={MapPin} alt="Map pin"/><h1>{text}</h1></div>;
const MarkerCompany = ({text}) => <div className="ui-marker"><img className="ui-map-pin" src={MapPin} alt="Map pin"/><h1>{text}</h1></div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.784912,
      lng: 20.473332
    },
    zoom: 14
  };
  render() {
    const greatPlaceStyle = {
      position: 'absolute',
      background: 'red',
      transform: 'translate(-50%, -50%)'
    }
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
          <div style={greatPlaceStyle}>
      {this.props.text}
    </div>
          <MapMarker
            lat={44.784912}
            lng={20.473332}
            text="Home"
          />
          <MarkerCompany
            lat={44.776450}
            lng={20.475348}
            text="Liberte"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;