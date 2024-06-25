import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='container-fluid vh-100 '>
        <div className='row'>
          <Nav />
          <div className='col-9 bg-black'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='*' element={<h1>NotFound 404</h1>} />

            </Routes>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
