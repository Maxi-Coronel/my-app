import './App.css';
import { Header } from './components/Header/Header';
import ProductsList from './components/ProductList/ProductList';
import { ProductsProvider } from './context/ContextProduct';

function App() {
  return (
    <ProductsProvider>
        <Header />
        <ProductsList />
    </ProductsProvider>
  );
}

export default App;
