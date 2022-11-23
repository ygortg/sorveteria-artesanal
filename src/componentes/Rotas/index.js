import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import PaginaInicial from '../Paginas/PaginaInicial';
import PaginaSabores from '../Paginas/PaginaSabores';
import PaginaInfo from '../Paginas/PaginaInfo';

const Rotas = () => (
  <HashRouter>
    <Routes>
      <Route exact path='/' element={<PaginaInicial/>}/>
      <Route path='/sabores' element={<PaginaSabores/>}/>
      <Route path='/info' element={<PaginaInfo/>}/>
    </Routes>
  </HashRouter>
)

export default Rotas;