import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import POSSystem from "../src/Container/POS-Systems/POS-System";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <POSSystem />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
