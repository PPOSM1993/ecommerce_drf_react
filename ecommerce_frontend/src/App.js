import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { HashRouter as Router , Routes, Route} from 'react-router-dom';
import HomeScreen from './components/screens/HomeScreen'
import LoginScreen from './components/screens/LoginScreen';
import SignUpScreen from './components/screens/SignupScreen';
import CartScreen from './components/screens/CartScreen';
import Product from './components/Product';
import ProductScreen from './components/screens/ProductScreen';

export default function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/product/:id" element={<ProductScreen />}></Route>
        </Routes>


        <Routes>
          <Route exact path="/login" element={<LoginScreen />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/signup" element={<SignUpScreen />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/cart" element={<CartScreen />}></Route>
        </Routes>

      </Router>
    </>
  )
}

