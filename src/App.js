import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom'
import ProductsGet from './components/graphql/ProductsGet';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <ProductsGet />

    </div>
  );
}

export default App;
