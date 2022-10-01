import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import About  from "./pages/About";
import Home  from "./pages/Home";
import Default  from "./pages/Default";
import Dashboard  from "./pages/Dashboard";
import Product  from "./pages/Product";
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="about" element={<About />} />
           <Route path="/" element={<Home />} />
           <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Product />} />
            <Route path="products/:prodcutId" element={<ProductDetails />} />
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
