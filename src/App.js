import Navigation from "./components/Navigation";
import AppRoute from "./components/AppRoute";

import { BrowserRouter } from "react-router-dom";

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
