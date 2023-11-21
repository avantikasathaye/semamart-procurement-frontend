import logo from './logo.svg';
import './App.css';

import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Products from './components/sections/Products';
import MiniDrawer from './components/dashboard/mini-drawer';

function App() {
  return (
    <BrowserRouter>
      <MiniDrawer>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </MiniDrawer>
    </BrowserRouter>
  );
}

export default App;
