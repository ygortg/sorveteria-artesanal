import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './style.css';

export default function PaginaInicial() {
  return(
    <div>
      <Header/>
      
      <main>
        <section className='banner'>
          <div className='wrap texto-banner'>
            <h1>SORVETE ARTESNAL</h1>
          </div>
        </section>

        <section className='card'>
          <img src='assets/imagens/banner-sabores.jpg'/>
          <div className='card-text'>
            <h3 className='titulo-card'>Nossos sabores</h3>
            <span>Novos e deliciosos</span>

            <p>
              Sorvete bom é aquele feito comos melhores ingredientes!<br/>
              Aqui na gelateria todos os nossos produtos são naturais a base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açucar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudavel ao mesmo tempo!
            </p>
          </div>
        </section>

        <section className='card'>
          <div className='card-text'>
            <h3 className='titulo-card'>Nossos Eventos</h3>
            <span>Delícias com sorvete!</span>
            <p>Mias do que um sorvete, uma extensão da sua casa! Estamos aqui prontinhos para atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha conhecer e passar um tempo com a gente.</p>
          </div>
          <img src='assets/imagens/eventos-image.jpg'/>
        </section>

        <section className='card'>
          <img src='assets/imagens/sobre-image.jpg'/>
          <div className='card-text'>
            <h3 className='titulo-card'>Sobre nós</h3>
            <span>Alegria em cada casquinha!</span>

            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar de fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
            </p>
          </div>
        </section>

      </main>
      <Footer/>
    </div>
  );
}