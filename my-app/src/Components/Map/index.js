import React, {Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "85%"
};
class MapContainer extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      stores: [
        { lat: 38.639120, lng: -90.232401 },
        { latitude: 38.655232, longitude: -90.29778 },
        { latitude: 38.590357, longitude: -90.219290}
      ]
    };
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("Clicked me..!")}
        />
      );
    });
  };
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 38.62727, lng: -90.19789 }}
        >
          {this.displayMarkers()}
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCr1KVRKL2WDdO9B6Drm6JMaL6bKKrElHQ"
})(MapContainer);