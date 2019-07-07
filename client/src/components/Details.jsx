import React from 'react';
import Gauge from 'react-svg-gauge';
import { NavLink } from 'react-router-dom';

export default class Details extends React.Component {

  constructor(props) {
    super(props);
    console.log('PROPS:', props);
    this.state = {
      waterLocation: 'Upstream',
      otherLocation: 'Downstream',
      waterIndex: {
        "hill-of-life": "lost-creek",
        "sculpture-falls": "lost-creek",
        "twin-falls": "lost-creek",
        "gus-fruh": "loop-360",
        "campbells-hole": "loop-360",
        "the-flats": "loop-360",
        "barton-springs": "above-barton-springs",
        "lost-creek": "lost-creek",
        "loop-360": "loop-360",
        "above-barton-springs": "above-barton-springs"
      },
      downstreamWaterIndex: {
        "hill-of-life": "loop-360",
        "sculpture-falls": "loop-360",
        "twin-falls": "loop-360",
        "gus-fruh": "above-barton-springs",
        "campbells-hole": "above-barton-springs",
        "the-flats": "above-barton-springs",
        "barton-springs": "above-barton-springs",
      }
    }
  }

  handleClick(name) {
    let waterLocation;
    if (this.state.waterLocation === 'Upstream') {
      waterLocation = this.state.downstreamWaterIndex[name];
      this.setState({
        waterLocation: 'Downstream',
        otherLocation: 'Upstream'
      });
    } else {
      waterLocation = this.state.waterIndex[name];
      this.setState({
        waterLocation: 'Upstream',
        otherLocation: 'Downstream'
      });
    }
    this.props.updateWaterData(waterLocation);
  }

  render() {
    return (
      <div className="details-container">
        <div className="swimming-hole-water">
          {this.props.locationType === 'star' ? <h3 className="details-title">{this.state.waterLocation} Water Data</h3> : <h3 className="details-title">Water Data</h3>}
          <div className="details-body">
            <div className="gauge">
              <Gauge
                value={this.props.depth}
                valueFormatter={(val) => this.props.depth ? `${val} ft` : 'Loading...'}
                width={this.props.gaugeWidth}
                height={this.props.gaugeWidth * .8}
                label="Depth"
                valueLabelStyle={ {'fontSize': '90%'} }
                topLabelStyle={ {'fontSize': '120%'} }
                min={0}
                max={20}
                color={this.props.depthColor}
              />
            </div>
            <div className="gauge">
              <Gauge
                value={this.props.flow}
                valueFormatter={(val) => this.props.flow ? `${val} cf/s` : 'Loading...'}
                width={this.props.gaugeWidth}
                height={this.props.gaugeWidth * .8}
                label="Flow Rate"
                valueLabelStyle = { {'fontSize': '90%'} }
                topLabelStyle={ {'fontSize': '120%'} }
                min={0}
                max={300}
                color={this.props.flowColor}
              />
            </div>
          </div>
          <div className="location-details">
            {
              this.props.locationType === 'star' 
                ? 
                <p className="underline-link" onClick={() => {this.handleClick(this.props.selectedLocation)}}>View {this.state.otherLocation} Water Data Instead</p> 
                : 
                null
            }
          </div>
        </div>
      </div>
    )
  }
}