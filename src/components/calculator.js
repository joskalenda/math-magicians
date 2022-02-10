import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: '',
      operation: '',
    };
  }

  HandleClick = (element) => this.setState((e) => calculate(e, element.target.textContent));

  render() {
    const { total, next, operation } = this.state;
    const CalcElement = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
      .map((item) => <button type="button" onClick={this.HandleClick} className="button" key={item} id={item}>{item}</button>);
    return (
      <div className="container">
        <div className="display--section">{0}</div>
        <div className="buttons--ssection">{CalcElement}</div>
      </div>
    );
  }
}

export default Calculator;
