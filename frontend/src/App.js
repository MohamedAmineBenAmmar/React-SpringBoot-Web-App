// Configuring the styles of the app
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import PrimeReact from "primereact/api";

// Handling Routing
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import the layout components
import Navbar from "./navigation/Navbar";
import Banner from "./components/Banner";

// Importing the needed components
import Home from "./views/Home";
import Quiz from "./views/Quiz";
import Statistics from "./views/Statistics";


function App() {
  // PrimeReact config
  PrimeReact.ripple = true;
  return (
    <BrowserRouter>      
        <div className="App-header">
          <Navbar />
        </div>
        <div className="App-container">
          <Switch>
            <Route exact path="/" component={Home} />  
            <Route exact path="/quiz" component={Quiz} />  
            <Route exact path="/statistics" component={Statistics} />              
          </Switch>
        </div>
        <div className="App-footer">
          <Banner />
        </div>
    </BrowserRouter>
  );
}

export default App;
