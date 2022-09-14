import React from "react";
import './style.css';

export default function Footer() {
  return(
    <footer>
      <div className="rodape wrap">
        
        <img className="logo-footer" src="assets/imagens/logo.png"/>

        <div className='info'>
          <span>
            Endereço
          </span>
          <p>
            Av.Bernadinho de <br/>
            Campos, 98 <br/>
            São Paulo, SP 12345-678
          </p>
        </div>
        
        <div className='info'>
          <span>Contato</span>
          <p>
            info@meusite.com <br/>
            Tel: (11) 3456-7890
          </p>
        </div>  
        
        <div className='info'>
          <span>Horários</span>
          <p>
            ABERTO TODOS OS DIAS <br/>
            10:00 - 22:00
          </p>
        </div>

      </div>
        
      <div className="footer-autoral">
        <p>Gelateria. Orgulhosamente desenvolvido por Ygor Torres</p>
      </div>
    </footer>
  );
}