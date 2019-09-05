import React, { Component } from 'react';
import Summary from './Summary/Summary'


class Cart extends Component {
    render () {
        return (
          <section className="main__summary">
            <h2>Your cart</h2>
            <Summary USCurrencyFormat = {this.props.USCurrencyFormat} total = {this.props.total} featureHash = {this.props.featureHash} options = {this.props.options} summary = {this.props.summary} selectedOption = {this.props.selectedOption} />
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {this.props.USCurrencyFormat.format(this.props.total)}
              </div>
            </div>
          </section>
        )
    } 
}

export default Cart;