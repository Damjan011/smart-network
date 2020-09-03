import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import './style.css';
import InfoWindowContent from './infoWindowContent';
import InfoWindowEx from './infoWindowEx';
//import InfoWindowAcknowledge from './infoWindowContent/infoWindowAcknowledge';

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
      <Map google={this.props.google} onClick={this.onMapClicked} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={'Example name'} />
        <InfoWindowEx className='ui-info-window'
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <InfoWindowContent />
        </InfoWindowEx>
   
        {/* <Marker onClick={this.onMarkerClick}
          name={'SOMA'}
          position={{ lat: 37.778519, lng: -122.405640 }} />
          <InfoWindowEx className='ui-info-window'
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <InfoWindowAcknowledge />
        </InfoWindowEx> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyClhpytnSsGpLP5r6MFq05qM3iHHkuSSCI"
})(MapContainer)