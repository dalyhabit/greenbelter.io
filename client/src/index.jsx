import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SwimmingHole from './components/SwimmingHole.jsx';
import GreenbeltMap from './components/GreenbeltMap.jsx';
import Toolbar from './components/Toolbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      locationIndex: {
        'Hill of Life': 'lostCreek',
        'Sculpture Falls': 'lostCreek',
        'Twin Falls': 'lostCreek',
        'Gus Fruh': 'loop360',
        'Campbell\'s Hole': 'loop360',
        'The Flats': 'loop360',
        'Barton Springs': 'belowBartonSprings',
      }
    };
    this.changeSwimmingHole = this.changeSwimmingHole.bind(this);
  }

  changeSwimmingHole (value) {
    const waterLocation = this.state.locationIndex[value];
    this.setState({
      swimmingHole: value,
      waterData: this.state[waterLocation]
    });
  }

  componentDidMount() {
    // Get water flow data from USGS on page load
    $.ajax({
      url: '/greenbelt-data', 
      success: (data) => {
        console.log('greenbelt data:', data);
        this.setState({
          aboveBartonSprings : data.aboveBartonSprings,
          belowBartonSprings : data.belowBartonSprings,
          oakHill : data.oakHill,
          lostCreek : data.lostCreek,
          loop360 : data.loop360
        });
        console.log('STATE:', this.state);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    if (this.state.swimmingHole) {
      return (
        <div className="react-root">
          <Toolbar />
          <SwimmingHole
            className="swimming-hole"
            waterData={this.state.waterData}
            swimmingHole={this.state.swimmingHole} />
        </div>
      )
    } else {
      return (
        <div className="react-root">
          <Toolbar/>
          <GreenbeltMap className="greenbelt-map" changeSwimmingHole={this.changeSwimmingHole}/>
        </div>
        )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));