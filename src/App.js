//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
//import NumericInput from 'react-numeric-input';

function App() {

  // State variables
  var [fdamount, setFdAmount] = useState();
  const [interest, setInterest] = useState();
  const [period, setPeriod] = useState();
  const [result, setResult] = useState();

  // Function to calc amount
  function calculateTotal() {
    var quaterly = 3;
    var tempAmount = 0;
    var calcAmount = 0;

    while(quaterly <= period) {
			calcAmount = fdamount * interest/4/100;
			tempAmount = fdamount + calcAmount;
			fdamount = tempAmount;
			quaterly = quaterly + 3;
		}

    setResult(Math.round(tempAmount));
  }

  return (
    <div className="App">
      <h1>Fixed Deposit Calculator</h1>

      <div>
        <div>
          <h3>Principal</h3>
          <input
            type="text"
            value={fdamount}
            onChange={e => setFdAmount(+e.target.value)}
            placeholder="0"
          />
        </div>
        
        <div>
          <h3>Rate Of Interest</h3>
          <input
            type="number"
            step="0.1"
            value={interest}
            onChange={e => setInterest(+e.target.value)}
            placeholder="0"
          />
        </div>

        <div>
          <h3>Period of deposit (Months)</h3>
          <input
            type="text"
            value={period}
            onChange={e => setPeriod(+e.target.value)}
            placeholder="0"
          />
        </div>
      </div>

      <div style={{paddingTop:'10px'}}>
        <button onClick={calculateTotal}> Calculate </button>
      </div>
      

      <h2>Maturity Amount : {result}</h2>
    </div>
  );
}

export default App;
