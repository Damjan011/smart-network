import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapPin from '../../assets/images/map-pin.png';

const MapMarker = ({ text }) => <div className="aa"><img className="ui-map-pin " src={MapPin} alt="Map pin"/><h1>{text}</h1></div>;
const MarkerCompany = ({text}) => <div className="aa"><h1>{text}</h1></div>;
const handleApiLoaded = (map, maps) => {
  // use map and maps objects
};



const InfoWindow = props => (
  props.show ? (<div style={{width: 100, height: 100}}>Info window</div>) : null
)




class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.784912,
      lng: 20.473332
    },
    zoom: 12
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
            lat={44.784912}
            lng={20.473332}
            text="Home"
            onClick={() => {
              InfoWindow.open();
           }}
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