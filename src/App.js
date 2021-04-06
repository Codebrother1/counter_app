
import Counter from './Counter'
import CounterHooks from './CounterHooks';

function App() {
  return (
    <div>
    Counter
   <Counter initialCount={0}/>
   Counter Hooks
   <CounterHooks initialCount={0}/>
   </div>
  );
}

export default App;
