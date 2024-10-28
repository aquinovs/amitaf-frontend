import './index.scss';

export default function contato() {
  return (
    <div className="Home">
      <header>
        <a className='amitaf' href=''><img src="/assets/images/Logo-Amitaf.png" alt="Logo amitaf" /></a>
      
        <nav>
          <a className='links' href="/home">PRINCIPAL</a>
          <a className='links' href="/servicos">SERVIÇOS</a>
          <a className='links' href="/contato">CONTATO</a>
          <a className='links' href="/">SOBRE NÓS</a>
          <a className='links' href="/">VALORES</a>
          <a href=''><img className='login' src='/assets/images/login.png' alt='login'/></a>
        </nav>
      </header>

      <main>
          <img className='mulher' src="/assets/images/mulher.png" alt="" />

          <div className='imagens'>
            <img className='letreiro' src="/assets/images/letreiro.png" alt="" />
            <img className='amitaf' src="/assets/images/Logo-Amitaf.png" alt="" />
          </div>
      </main>

      <div className="transicao">
        <h1>Renove sua AUTOESTIMA com Amitaf</h1>
      </div>
      
      <div className="segunda">
        <img className='mona' src="/assets/images/mona.png" alt="" />
    
        <div className='texto'>
         <h1 >sobre nós</h1>

          <div className='centro'>

            <p className='text'>A empresa Amitaf foi fundada em 2021 para ajudar na autoestima de muitas mulheres, através de procedimentos estéticos, realçando a beleza  natural de cada cliente.</p> 
            <p>A nossa <span>MISSÃO</span> é trazer soluções no segmento da beleza com alta qualidade, dedicação e respeito.</p>
        
          </div>
        </div>
      </div>

      <div className='procedimentos'>
          <h1>Nossos Procedimentos</h1>
      </div>

      <div className='mae'>
        <div className='nair'>
          <img src="/assets/images/naildesigner.png" alt="" />
          <h1>nail designer</h1>
          <p> Especializada em design de unhas, responsável por criar decorações, aplicar técnicas de embelezamento e cuidados com as unhas, além de utilizar uma variedade de materiais,
             como esmaltes, adesivos e gel, para criar designs artísticos e personalizados.</p>
          <button>Agende seu horário</button>
        </div>
        
        <div className='Design'>
          <img src="/assets/images/designersombracelha.png" alt="" />
          <h1>Design de sobrancelha</h1>      
          <p>Sobrancelhas perfeitamente modeladas por especialistas de acordo com o modelo do seu rosto.</p>  
          <button>Agende seu horário</button>
        </div>

        <div className='Brown'>
          <img src="/assets/images/Browmlaminashion.png" alt="" />
          <h1>Brown laminashion</h1>      
          <p>Procedimento ideal para quem possui sobrancelhas rebeldes e quer um design mais harmonioso.</p>  
         <button>Agende seu horário</button>
        </div>
        
        <div className='Botox'>
              <img src="/assets/images/botoxlabial.png" alt="" />
              <h1>Botox labial</h1>      
              <p>Procedimento ideal para quem possui sobrancelhas rebeldes e quer um design mais harmonioso.</p>  
             <button>Agende seu horário</button>
            </div>
      </div>
     
     
      <div className='pai'>
        <div className='car'>
        <img src="/assets/images/" alt="" />
          <h1>Limpeza de pele</h1>            
          <p>Processo de remoção do excesso de impurezas, manchas e células mortas da pele.</p>
          <button>Agende seu horário</button>
        </div>
        <div className='dado'>
          <img src="/assets/images/" alt="" />
          <h1>Depilação</h1>      
          <p>Seu corpo sem pelos em procedimentos com a qualidade que só nossos profissionais entregam.</p>  
          <button>Agende seu horário</button>
        </div>
        <div className='gloss'></div>
        <img src="/assets/images/" alt="" />
          <h1>Hidra gloss</h1>      
          <p>Tratamento que torna os lábios mais bonitos, hidratados e contribui para um aspecto jovem.</p>  
          <button>Agende seu horário</button>
      </div>
    </div>

  ); 
} 
