import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
import './style.css';
import InfoWindowContent from './infoWindowContent';
import InfoWindowEx from './infoWindowEx';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acknowledge: false
    }
  };

  onWindowChange(acknowledge) {
    this.setState(acknowledge);
  };

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
      <Map
        google={this.props.google}
        onClick={this.onMapClicked}
        zoom={14}
        initialCenter={{ lat: 44.776930, lng: 20.476100 }}>

        <Marker onClick={this.onMarkerClick}
          title={'Cafe Liberte'}
          name={'Liberte'}
          position={{ lat: 44.776319, lng: 20.475316 }} />

        <Marker onClick={this.onMarkerClick}
          title={'Cafe Escalera'}
          name={'Escalera'}
          position={{ lat: 44.784198, lng: 20.475534 }} />

        <Marker onClick={this.onMarkerClick}
          title={'Cafe Kangaroo'}
          name={'Kangaroo'}
          position={{ lat: 44.785436, lng: 20.468537 }} />

        <Marker onClick={this.onMarkerClick}
          title={'Auto parts store'}
          name={'Euro Auto'}
          position={{ lat: 44.785710, lng: 20.467780 }} />

        <InfoWindowEx className='ui-info-window'
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <InfoWindowContent />
        </InfoWindowEx>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyClhpytnSsGpLP5r6MFq05qM3iHHkuSSCI"
})(MapContainer)