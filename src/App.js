import './App.css';
import SingleInput from "./components/SingleInput";
import MultipleInput from "./components/MultipleInput";
import Textarea from "./components/Textarea";
import Select from "./components/Select";

function App() {
  return (
    <div className="App">
      <SingleInput></SingleInput>
      <MultipleInput></MultipleInput>
      <Textarea></Textarea>
      <Select></Select>
    </div>
  );
}

export default App;