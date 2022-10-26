import React from "react";
import './App.css';
import Home from "./Home"
import Menu from "./Menu";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./About";
import Track from "./components/Track";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Account from "./Account"
import My_cart from "./My_cart"
import Login from "./Login";
import Signup from "./Signup";

function App(){
    return <div>
     <Header />
    <BrowserRouter>
    <Nav />

     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/about" element={<About/>} />

     <Route path="/menu" element={<Menu />} />
     <Route path="/track" element={<Track />} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/account" element={<Account />} />
     <Route path="/cart" element={<My_cart />} />
     <Route path="/login" element={<Login/>} />
     <Route path="/signup" element={<Signup/>} />


     
     <Route path="/*" element={<h1>error 404 the page is not found</h1>} />



     </Routes> 
     <Footer />

    </BrowserRouter>
    
    </div>
}
export default App;