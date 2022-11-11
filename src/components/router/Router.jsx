
import React, {useState}from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../home/Home'
import Cart from '../cart/Cart'
import Product from '../product/Product'
import Contact from '../contact/Contact'
import Errorpage from '../error/Errorpage'
import Like from '../like/Like'
import Header from '../header/Header'
import Footer from '../footer/Footer'
// import data from './Product_list'

const Routers = () => {


 
  return (
   <Router>
   <Header/>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/product' element = {<Product/>} />
      <Route path='/cart' element = {<Product/>}/>
      <Route path='/contact' element = {<Contact />}/>
      <Route path='/like' element = {<Like />}/>
      <Route path='*' element = {<Errorpage />} />
    </Routes>
    <Footer />
   </Router>
 
  )
}

export default Routers