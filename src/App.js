import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Curriculo from './components/pages/Curriculo'
import Contato from './components/pages/Contato'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/curriculo' element={<Curriculo/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
