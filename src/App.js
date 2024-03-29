import AppNavbar from './AppNavbar';
import './App.css';
import {  Route ,Routes} from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
