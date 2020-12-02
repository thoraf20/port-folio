import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import LandigPage from './components/Landig-page';
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={LandigPage}></Route>
        <Route path="/about" component={About}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
