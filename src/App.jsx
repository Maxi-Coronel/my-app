import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import ProductsList from './components/ProductList/ProductList';
import { ProductsProvider } from './context/ContextProduct';

function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
      <Header />
        <Routes>
          <Route path='/categoria/:catId' element={<ProductsList />} />
        </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
