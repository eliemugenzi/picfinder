import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <br />
          <Search />
          <br />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
