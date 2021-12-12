import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ProductsProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <ProductsProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:catId' element={<ItemListContainer />} />
            <Route path='/product/:prodId' element={<ItemDetailContainer />} />
          </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;