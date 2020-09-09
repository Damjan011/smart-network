import React from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css';
import InfoWindowContent from './infoWindowContent';
import InfoWindowEx from './infoWindowEx';
//import InfoWindowAcknowledge from './infoWindowContent/infoWindowAcknowledge';

const mapNetworks = [ 
  {
    lat: 38.1715307692773,
    lng: -120.93831743140161,
    name: "Luka"
  },
  {
    lat: 38.1715307692773,
    lng: -121.93831743140161,
    name: "Damjan"
  }
]

const AnyReactComponent = ({ text }) => (
  <div>
    <div>

    </div>
    <img src={require('../../assets/images/bridge-green-marker.png')} style={{ width: '30px', height: '34px' }} />
  </div>
);


export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyClhpytnSsGpLP5r6MFq05qM3iHHkuSSCI" }}
        defaultCenter={{
          lat: 38.1715307692773,
          lng: -121.93831743140161
        }}
        zoom={9}
        yesIWantToUseGoogleMapApiInternals
      >
        {
          mapNetworks && mapNetworks.map((item) => (
            <AnyReactComponent
              lat={item.latitude}
              lng={item.longitude}
              text="JOOOJ DEBILU"
            />
          )) || null
        }
    </GoogleMapReact>
    </div>
    );
  }
}

export default MapContainer