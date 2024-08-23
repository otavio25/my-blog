import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import TCC from './components/pages/TCC'
import Memorando from './components/pages/Memorando';

function App(){
  return (
    <BrowserRouter basename="/my-blog">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tcc' element={<TCC/>}/>
        <Route path='/memorando' element={<Memorando/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
