import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Support from './components/Support.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Labs from './components/Labs.js';
import NotFound from './components/NotFound.js';
import Mainpage from './Mainpage.js';
function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/notfound">Not Found</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Mainpage />}>

          {/* 
              here we are using index element so... iska mtlb
              ki index is the default route... 

          */}

          <Route index element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
