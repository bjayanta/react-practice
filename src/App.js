import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./features/counter/counterSlice";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import User from "./components/User";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>5+</button>

      <Counter />
      
      <hr />
      <Counter2 />

      <hr />
      <User />
    </div>
  );
}

export default App;
