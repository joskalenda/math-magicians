import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const CalcElement = ['AC', '%/+', '%', '+', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
      .map((item) => <button type="button" className="button" key={item} id={item}>{item}</button>);

    return (
      <div className="container">
        <div className="display--section">{0}</div>
        <div className="buttons--ssection">{CalcElement}</div>
      </div>
    );
  }
}

export default Calculator;
