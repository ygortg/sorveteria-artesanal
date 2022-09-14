import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PaginaInicial from '../Paginas/PaginaInicial';
import PaginaSabores from '../Paginas/PaginaSabores';
import PaginaInfo from '../Paginas/PaginaInfo';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<PaginaInicial/>}/>
      <Route path='/sabores' element={<PaginaSabores/>}/>
      <Route path='/info' element={<PaginaInfo/>}/>
    </Routes>
  </BrowserRouter>
)

export default Rotas;