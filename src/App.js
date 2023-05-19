import './App.css';
import NaviBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cancel from './components/Cancel';
import Success from './components/Success';
import Store from './components/Store';
import NotFound from './components/NotFound';
import Footer from './components/Footer'
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <div >
          <NaviBar />
          <main className='container mx-auto px-1 pb-5'>
            <Routes>
              <Route path='/' element={<Store />}/>
              <Route path='/success' element={<Success />}/>
              <Route path='/cancel' element={<Cancel />}/>
              <Route path='/*' element={<NotFound />}/>
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;