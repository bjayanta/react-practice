import { BrowserRouter } from "react-router-dom";
import AppRoute from "./components/AppRoute";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;