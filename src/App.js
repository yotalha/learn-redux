import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();



  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(4))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      
      {isLogged ? <h3>Valuable information i cant see without being logged in first</h3> : ''}

    </div>
  );
}

export default App;
