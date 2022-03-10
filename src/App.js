import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className='App'>
      <Router>
      <Header />

        <Routes>
      <Route path='/' exact element={<ProductListing />} />
      <Route path='/product/:id' exact element={<ProductDetail />} />
      <Route>404 not found</Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
