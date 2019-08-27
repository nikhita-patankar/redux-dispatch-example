import React from 'react';
import logo from './logo.svg';
import Home from './homeComponent/homeComponent'

import './assets/css/template.css'
import './assets/css/bootstrap.min.css'

interface props {
  store: any
}

class App extends React.Component<props> {
  render() {
    return (
      <div className="App">
        <Home store={this.props.store} />
      </div>
    );
  }
 
}

export default App;