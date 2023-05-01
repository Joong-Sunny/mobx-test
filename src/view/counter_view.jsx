import React from 'react';
import { observer } from 'mobx-react';
import counterViewModel from '../viewModel/counter_viewModel';

const Counter = observer(() => {
  const { count, incrementCount } = counterViewModel;
  const handleIncrement = (num)=>{
    incrementCount(num);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => handleIncrement(1)}>mobx스토어값 1씩 올려주기</button>
      <button onClick={() => handleIncrement(2)}>mobx스토어값 2씩 올려주기</button>
      <button onClick={() => handleIncrement(5)}>mobx스토어값 5씩 올려주기</button>
    </div>
  );
});

export default Counter;