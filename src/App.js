import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import Dashboard from './components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (<Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  </Router>


  );
}

export default App;
