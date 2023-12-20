import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import TCC from './components/pages/TCC';

function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tcc' element={<TCC/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
