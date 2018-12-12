import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Glyphicon } from "react-bootstrap";

const AnyReactComponent = ({ text }) => (
  <div>
    <Glyphicon glyph="home" style={{ fontSize: "2em", color: "purple" }} />
    {/* <h3>

      <strong> {text} </strong>
    </h3> */}
  </div>
);

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
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
            text={"*"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
