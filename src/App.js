import './App.css';
import NaviBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cancel from './components/Cancel';
import Success from './components/Success';
import Store from './components/Store';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div>
        <NaviBar />

        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Store />}/>
            <Route path='/success' element={<Success />}/>
            <Route path='/cancel' element={<Cancel />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;