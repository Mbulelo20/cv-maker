import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar'
import Mycv from './components/mycv';
import Createcv from './components/createcv'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={Mycv}></Route>
      <Route path="/createcv" exact component={Createcv}></Route>
      </Router>
    </div>
      
  );
}

export default App;
