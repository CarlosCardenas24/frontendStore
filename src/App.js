import './App.css';
import NaviBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cancel from './components/cancel';
import Success from './components/success';
import Store from './components/store';

function App() {
  return (
    <Router>
      <div>
        <NaviBar />

        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/success' element={<Success />}/>
            <Route path='/cancel' element={<Cancel />}/>
            <Route path='/store' element={<Store />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;