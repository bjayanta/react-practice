import StateHook from './components/StateHook'
import EffectHook from './components/EffectHook'

function App() {
  return (
    <div>
      <h3>Use State Hook</h3>
      <StateHook />

      <hr/>

      <h3>Use Effect Hook</h3>
      <EffectHook />
    </div>
  );
}

export default App;
