import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 39.410083,
      lng: -77.332167
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        {/* prettier-ignore */}
        <GoogleMapReact
          bootstrapURLKeys={{key: ["AIzaSyAhMvac4819aBYoEvI-f0zeIfwbaFen414"]

        }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            // lat={39.41}
            // lng={77.33}
            text={"Customer Location"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
