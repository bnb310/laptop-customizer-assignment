import React, { Component } from 'react';


class Summary extends Component {
    render () {
        var summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature];
          });
        return (
            <div className="summary__option" key={featureHash}>
              <div className="summary__option__label">{this.props.feature} </div>
              <div className="summary__option__value">{selectedOption.name}</div>
              <div className="summary__option__cost">
                {this.props.USCurrencyFormat.format(selectedOption.cost)}
              </div>
            </div>
          );
    }
}

export default Summary;