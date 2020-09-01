import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import './style.css';
import InfoWindowContent from './infoWindowContent';

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
        <InfoWindow className='ui-info-window'
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          {/* <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div> */}
          <InfoWindowContent />
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyClhpytnSsGpLP5r6MFq05qM3iHHkuSSCI"
})(MapContainer)