import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "../node_modules/chart.js/dist/chart";
import "./bootstrap/css/bootstrap.css"

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Dashboard></Dashboard>
      <div className="App">
        {/* <Header/> */}
        <Routes>
          <Route path='/' element></Route>
        </Routes>
      </div>
      {/* <Footer/> */}
    </Router>
    
  );
}

export default App;
