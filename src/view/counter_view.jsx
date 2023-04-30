import React from 'react';
import { observer } from 'mobx-react';
import counterViewModel from '../viewModel/counter_viewModel';

const Counter = observer(() => {
  const { count, incrementCount } = counterViewModel;
  const handleIncrement = ()=>{
    incrementCount();
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>mobx스토어값 올려주기</button>
    </div>
  );
});

export default Counter;