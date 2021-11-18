import React, { useState, useEffect }  from 'react'

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [isInputBlur, setIsInputBlur] = useState(false);

  const [selectType, setSelectType] = useState('prime');
  const [isMatch, setIsMatch] = useState(false);

 useEffect(()=>{
   if(isInputBlur){
    const isFibonacci = (query, count = 1, last = 0) => {
      if(count < query){
        return isFibonacci(query, count+last, count);
      };
      if(count === query){
        return true;
      }
      return false;
    };
    setIsMatch(false);
    selectType==='prime' && !isFibonacci(input) && setIsMatch(true)
    selectType==='fibo' && isFibonacci(input) && setIsMatch(true)
  }
},[isInputBlur, selectType])


  const selectChangeHandler = (e) => {
    setSelectType(e.target.value);

    // if(e.target.value === 'fibo'){
    //   setIsFobo(fibonacci(input));
    // }else{
    //   setIsFobo(false);
    // }
  }

  const inputChangeHanler = (e) => {
    setIsInputBlur(false);
    setInput(e.target.value);
  }

  const inputBlurHandler = () => {
    setIsInputBlur(true)
    let number = Math.round(input);
    setInput(number);
    if (number < 0) {
      setInput(1);
    }
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-left">
            <input type="number" value={input} onChange={inputChangeHanler} onBlur={inputBlurHandler} />
          </div>
          <div className="col col-middle">
            <select name="isFibo" id="isFibo" onChange={selectChangeHandler}>
              <option value="prime">isPrime</option>
              <option value="fibo">isFibonacci</option>
            </select>
          </div>
          <div className="col col-right">
            <p>{ String(isMatch) }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
