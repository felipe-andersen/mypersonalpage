import Image from 'next/image'
import './styles.css'
import { Div } from './styles'
import Social from './social'
import ChatButton from './cookiesAlert'
import { Head_ } from './Head'
import 'animate.css';
export default function HomeTemplate() {
    return (

        <Div>

            <Head_/>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            </style>

            <div className='fmnuebf'> 

                <h1 className='animate__animated animate__bounceInDown'>Felipe Andersen | Fullstack development - devops especialist</h1>

            </div>

            <div className='content'> 

                <div className='kgjgjhjuwj'>

                    <div className='topBar'>

                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero, harum laborum architecto 

                        <span></span>

                        {/* <button>LANGUAGE</button>

                        <button>COUNTRY</button> */}

                    </div>

                    <div className='nfkjsdl'>

                        <a>Felipe Andersen</a>

                        <nav>
                          
                            <a href=''><span>#</span><span>Sobre mim</span></a>

                            <a><span>#</span><span>Serviços </span></a>

                        </nav>

                        <button>Contate agora</button>

                    </div>

                </div>

                <div 
                    className='kllkj'
                >

                    <div className='jikutd animate__animated animate__lightSpeedInLeft '>

                        <img src='https://img.freepik.com/fotos-gratis/retrato-de-sorrindo-encantador-homem-jovem-em-cinzento-t-shirt-ficar-contra-planicie-fundo_23-2148213406.jpg?w=360'></img>

                    </div>

                    {/* <button>INICIE UM PROJETO</button> */}

                    <div
                      className='ajgnmo'
                    >

                        <span className='animate__animated animate__lightSpeedInRight'>

                            Construa, automatize <br/> e espanda sua <br/> presença digital

                        </span>

                        <span className=''>

                            Disponibilize para o mundo inteiro sites e aplicações mobile utilizado recursos da computação em nuvem

                        </span>

                    </div>
                      
                </div>

                <div className='about'>

                    <h2>Sobre mim</h2>

                    <p>
                      Sou graduado(a) em [Nome do Curso] pela [Nome da Universidade], onde adquiri uma sólida base de conhecimento em [Área de Estudo]. Durante minha formação, desenvolvi habilidades analíticas, capacidade de resolução de problemas e uma forte ética de trabalho.
                    </p>
                    <p>
                      Em resumo, sou uma pessoa comprometido com minha carreira, que busca aprendizado contínuo e também sabe a importância de ... Estou ansioso para explorar oportunidades que me permitam crescer e contribuir de forma positiva em um ambiente profissional.
                    </p>
                    <p>
                      Minhas aspirações profissionais incluem [Mencione suas metas e objetivos específicos]. Estou determinado(a) a contribuir de maneira significativa no campo [Sua Área de Interesse e continuar a crescer como profissional.
                    </p>
                    <p>
                      Ao longo dos últimos anos, tive a oportunidade de trabalhar em diversas funções, incluindo [Mencione suas experiências relevantes]. Essas experiências me permitiram desenvolver habilidades interpessoais como escuta ativa, respeito a diversidade e adaptabilidade, qualidades que considero fundamentais para o sucesso em qualquer ambiente de trabalho.
                    </p>
                  
                </div>

                <div className='portifolio'>

                    <div className='jhkdie'> 

                        <h2 >Portifólio</h2>

                        <span>&</span>

                    </div>
                  
                    <ul className='ffdf'>

                        <li>

                          <a href='www.lucakes.com' >Lucakes</a>
                          

                            <picture className='picture'>

                              <img src='https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png'></img>

                            </picture>

                            <div className='jnbgyhd statistic'>
                              <span>+ 11k users</span>&#183;
                              <span>20 colaborators</span>&#183;
                              <span>8 dowloads</span>
                            </div>

                            <div className='description' >
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem perferendis. Dicta vitae maxime, ducimus nesciunt rem facere iste voluptatum exercitationem, dolores aperiam, dolor repudiandae in nulla laudantium reprehenderit itaque.
                            </div>

                            <hr style={{border:"0.5px dashed rgba(237, 237, 237)", margin: "24px 0 12px 0"}}></hr>

                            <div className='uigugn'>
                                <img src='https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x'></img>
                                <span className='owner'>Wallace - Diretor chef</span>
                                <span className='hfnmmg'>
                                    <span>"</span>
                                  Lucake é uma plataforma de estudos online, onde o usuário pode se cadastrar e ter acesso a diversas matéri
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime ipsa vero incidunt ad hic quod minus mollitia asperiores. Perferendis hic iste vel impedit autem obcaecati omnis deleniti eveniet deserunt. 
                                    <span>"</span>
                                </span>
                            </div>

                            <div>
                                <span className='tag'>e-commerce</span>
                            </div>

                        </li>

                        <li>

                          <a href='www.lucakes.com' >Lucakes</a>
                          

                            <picture className='picture'>

                              <img src='https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png'></img>

                            </picture>

                            <div className='jnbgyhd statistic'>
                              <span>+ 11k users</span>&#183;
                              <span>20 colaborators</span>&#183;
                              <span>8 dowloads</span>
                            </div>

                            <div className='description' >
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem perferendis. Dicta vitae maxime, ducimus nesciunt rem facere iste voluptatum exercitationem, dolores aperiam, dolor repudiandae in nulla laudantium reprehenderit itaque.
                            </div>

                            <hr style={{border:"0.5px dashed rgba(237, 237, 237)", margin: "24px 0 12px 0"}}></hr>

                            <div className='uigugn'>
                                <img src='https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x'></img>
                                <span className='owner'>Wallace - Diretor chef</span>
                                <span className='hfnmmg'>
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime ipsa vero incidunt ad hic quod minus mollitia asperiores. Perferendis hic iste vel impedit autem obcaecati omnis deleniti eveniet deserunt. '
                                </span>
                            </div>

                            <div>
                                <span className='tag'>e-commerce</span>
                            </div>

                        </li>

                        <li>

                          <a href='www.lucakes.com' >Lucakes</a>
                          

                            <picture className='picture'>

                              <img src='https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png'></img>

                            </picture>

                            <div className='jnbgyhd statistic'>
                              <span>+ 11k users</span>&#183;
                              <span>20 colaborators</span>&#183;
                              <span>8 dowloads</span>
                            </div>

                            <div className='description' >
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem perferendis. Dicta vitae maxime, ducimus nesciunt rem facere iste voluptatum exercitationem, dolores aperiam, dolor repudiandae in nulla laudantium reprehenderit itaque.
                            </div>

                            <hr style={{border:"0.5px dashed rgba(237, 237, 237)", margin: "24px 0 12px 0"}}></hr>

                            <div className='uigugn'>
                                <img src='https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x'></img>
                                <span className='owner'>Wallace - Diretor chef</span>
                                <span className='hfnmmg'>
                                    <span>"</span>
                                  Lucake é uma plataforma de estudos online, onde o usuário pode se cadastrar e ter acesso a diversas matéri
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime ipsa vero incidunt ad hic quod minus mollitia asperiores. Perferendis hic iste vel impedit autem obcaecati omnis deleniti eveniet deserunt. 
                                    <span>"</span>
                                </span>
                            </div>

                            <div>
                                <span className='tag'>e-commerce</span>
                            </div>

                        </li>

                        <li>

                          <a href='www.lucakes.com' >Lucakes</a>
                          

                            <picture className='picture'>

                              <img src='https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png'></img>

                            </picture>

                            <div className='jnbgyhd statistic'>
                              <span>+ 11k users</span>&#183;
                              <span>20 colaborators</span>&#183;
                              <span>8 dowloads</span>
                            </div>

                            <div className='description' >
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem perferendis. Dicta vitae maxime, ducimus nesciunt rem facere iste voluptatum exercitationem, dolores aperiam, dolor repudiandae in nulla laudantium reprehenderit itaque.
                            </div>

                            <hr style={{border:"0.5px dashed rgba(237, 237, 237)", margin: "24px 0 12px 0"}}></hr>

                            <div className='uigugn'>
                                <img src='https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x'></img>
                                <span className='owner'>Wallace - Diretor chef</span>
                                <span className='hfnmmg'>
                                    <span>"</span>
                                  Lucake é uma plataforma de estudos online, onde o usuário pode se cadastrar e ter acesso a diversas matéri
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime ipsa vero incidunt ad hic quod minus mollitia asperiores. Perferendis hic iste vel impedit autem obcaecati omnis deleniti eveniet deserunt. 
                                    <span>"</span>
                                </span>
                            </div>

                            <div>
                                <span className='tag'>e-commerce</span>
                            </div>

                        </li>

                    </ul>

                </div>

                <div className='kfdhfkjd'>
                  
                    <h2>Notícias do X</h2>

                    <ul>

                        <li>
                    

                        </li>

                    </ul>

                </div>
        
                <div className='mgjtufnf'>
                  
                    <h2>Contato</h2>

                    <p>Contrate um serviço, peça consultoria ou envie um proposta de trabalho</p>

                    <form>

                        <label>name</label>

                        <input type="text" />

                    </form>

                </div>

                <div className='footer ouitnvds'>

                    <button>LANGUAGE</button>

                    <button>COUNTRY</button>

                </div>
      
                <ChatButton/>
                
            </div>

            <Social/>

        </Div>
    )
}