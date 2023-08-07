import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import DevOps from './components/pages/DevOps';
import FullStack from './components/pages/FullStack';
import BancodeDados from './components/pages/BancodeDados';
import Texto from './components/pages/Texto';
import Memorando from './components/pages/Memorando';

function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/devops' element={<DevOps/>}/>
        <Route path='/fullstack' element={<FullStack/>}/>
        <Route path='/bancodedados' element={<BancodeDados/>}/>
        <Route path='/texto' element={<Texto/>}/>
        <Route path='/memorando' element={<Memorando/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
