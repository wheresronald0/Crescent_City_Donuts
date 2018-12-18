import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Glyphicon } from "react-bootstrap";

const AnyReactComponent = ({ text }) => (
  <div>
    <Glyphicon
      glyph="home"
      style={{
        fontSize: "2em",
        color: "black"
      }}
    />
    {/* <h5>{text}</h5> */}
  </div>
);

class Map extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "60vh", width: "100%" }}>
        {/* prettier-ignore */}
        <GoogleMapReact
          bootstrapURLKeys={{key: ["AIzaSyAhMvac4819aBYoEvI-f0zeIfwbaFen414"]

        }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            // text={"Customer's Home"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
