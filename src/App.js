import StateHook from './components/StateHook'
import EffectHook from './components/EffectHook'

import { DataProvider } from "./components/context/DataContext";
import ComponentA from "./components/ComponentA";


function App() {
  return (
    <div>
      <h3>Use State Hook</h3>
      <StateHook />

      <hr/>

      <h3>Use Effect Hook</h3>
      <EffectHook />

      <h3>Context</h3>
      <DataProvider value="Jayanta">
        <ComponentA/>
      </DataProvider>
    </div>
  );
}

export default App;
