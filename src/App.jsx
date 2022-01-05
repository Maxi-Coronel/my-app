import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './components/Cart/Cart';
import { Order } from './components/Cart/Order/Order';

function App() {

  return (
    <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:catId' element={<ItemListContainer />} />
            <Route path='/product/:prodId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/ticket' element={<Order />} />
            {/* <Route path='/account' element={<Account />} />
            <Route path='/registro' element={<Registro />} /> */}
          </Routes>
    </BrowserRouter>
  );
}

export default App;