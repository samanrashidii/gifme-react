import React, { Component } from 'react';
import logo from './images/logo.svg';
import SearchBox from './components/SearchBox';

class App extends Component {
  state = {
    value: null,
    name: 'Gif Me...'
  }

  doSearch = (event) => {
    if (event) {
      console.log(event)
    }
  }
  render () {
    return (
      <div className="App">
        <div className="app-container">
          <div className="app-inner-container">
            <img src={logo} className="app-logo" alt="logo" />
            <h1>{this.state.name}</h1>
            <SearchBox
              searchItem={this.doSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
