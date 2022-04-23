import logo from './logo.svg';
import './App.css';

// react-router-dom all things
import Cinamaler from './pages/cinamaler';

import { Routes, Route, Outlet, Link , BrowserRouter} from "react-router-dom";
import Home from './pages/Home';

import SingleFilm from './pages/singleFilm';


import Allfilms from './components/allfilms';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     


      

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="film/:id" element={<SingleFilm />}/>
        <Route path="cinamalar" element={<Cinamaler />}/>
          
      </Routes>



    </div>
    </BrowserRouter>
  );
}

export default App;
