import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  // declare useState hook and replace it with .this props
  const [data, setData] = useState({ total: 0, next: '', operation: '' });

  // creat handler for button in sfc
  // const HandleClick = (element) => {
  //   const math = calculate(data, element.target.textContent);
  //   setData({ ...data, ...math });
  // };

  function HandleClick(element) {
    const math = calculate(data, element.target.textContent);
    setData({ ...data, ...math });
  }

  // Dsiplay math for calculation
  const doMath = `${data.total || data.operation || data.next ? `${data.total || ''} ${data.operation || ''} ${data.next || ''}` : '0'} `;
  const CalcElement = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']
    .map((item) => <button type="button" onClick={HandleClick} className="button" key={item} id={item}>{item}</button>);
  return (
    <>
      <p className="calcpa">Let us do some math</p>
      <div className="container">
        <div className="display--section">{doMath}</div>
        <div className="buttons--ssection">{CalcElement}</div>
      </div>

    </>

  );
};

export default Calculator;
