import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from'react-router-dom';
import Home from './Component/Home/Home';
import Navigation from './Component/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
