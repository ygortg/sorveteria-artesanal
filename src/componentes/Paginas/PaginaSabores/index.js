import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.css';


export default function PaginaSabores() {
  return(
    <div>
      <Header />

      <main>
        
        <section className='banner sabor'>
          <div className='wrap texto-banner'>
            <h1>Nossos Sabores</h1>
          </div>
        </section>

        <section className='sabores'>
          <h3 className='titulo-card'>Sabores de Sorvetes</h3>
          
          <div className='galeria wrap'>
            
            <div className='card-sorvete'>
              <img src='assets/imagens/sabor-cookies-avela.png'/>
              <h4>Sorvete Cookies & Avelã</h4>
              <p>O nosso melhor sorvete. Você vai adorar o sabor</p>
            </div>

            <div className='card-sorvete'>
              <img src='assets/imagens/sabor-oreo.png'/>
              <h4>Sorvete de Oreo</h4>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>

            <div className='card-sorvete'>
              <img src='assets/imagens/sabor-pistache.png'/>
              <h4>Sorvete de Pistache</h4>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
            </div>
          
            <div className='card-sorvete'>
              <img src='assets/imagens/sorbet-kiwi.png'/>
              <h4>Sorvete de Kiwi</h4>
              <p>Delicioso e refrescante sorvete sabor Kiwi. Rico em vitamina C</p>
            </div>

            <div className='card-sorvete'>
              <img src='assets/imagens/sorbet-limao.png'/>
              <h4>Sorvete de Limão Siciliano</h4>
              <p>O incrível sorvete gourmet de limão siciliano vai te encantar</p>
            </div>

            <div className='card-sorvete'>
              <img src='assets/imagens/sorbet-morango.png'/>
              <h4>Sorvete de Morango</h4>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>

          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}