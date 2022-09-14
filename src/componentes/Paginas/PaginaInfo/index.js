import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

import './style.css';

export default function PaginaInfo() {
 return(
  <div>
    <Header />
    
    <main>

      <section className='banner sobre'>
        <div className='wrap texto-banner'>
          <h1>A Gelateria</h1>
        </div>
      </section>

      <section>
        <div className='texto-sobre wrap'>
        <h3>Sobre Nós</h3>
        <span>Nós simplesmente amamos sorvete!</span>

          <p>Somos um empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
          
          <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Tambpem vendemos para estabelecimentos e criamos eventos como festa de aniversário., formaturas e eventos empresariais. Para contratar nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa com o melhor sorvete da cidade.</p>
        </div>
      </section>

      <section>
        <div className='imagens'>
          <img src='assets/imagens/sobre-image.jpg'/>
          <img src='assets/imagens/sorveteria.jpg'/>
        </div>
      </section>

    </main>

    <Footer />
  </div>
 ); 
}