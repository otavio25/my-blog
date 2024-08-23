import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

function App(){
  return (
    <BrowserRouter basename="/my-blog">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
