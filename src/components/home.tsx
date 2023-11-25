
import Image from 'next/image'
import './styles.css'
import { Div } from './styles'
import Social from './social'
import ChatButton from './cookiesAlert'
import { Head_ } from './Head'
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineChevronDown } from 'react-icons/hi';
import 'animate.css';
import { redirect } from 'next/dist/server/api-utils'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import Skeleton from '@mui/material/Skeleton';
import React, { Suspense, useState } from 'react'
import { cookies } from 'next/headers'
import { Form } from './form'
// import { formActions } from './formActions'
import { Metadata, ResolvingMetadata } from 'next'
import  SnakeBar  from './SnakeBar'
import client from '@/graphql-apoloServer'
import { ApolloProvider } from '@apollo/client'

const item = true;

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
   
  export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // fetch data
    const product = await fetch(`https://.../${id}`).then((res) => res.json())
   
    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: product.title,
      openGraph: {
        images: ['/some-specific-page-image.jpg', ...previousImages],
      },
    }
  }

export default function HomeTemplate() {
  
    const isLoading = true


    const SnakeBar = React.lazy(() => import('./SnakeBar'))

    // const [boxHeight, setBoxHeight] = useState<string>("0px");


    // const [value, setValue] = useState<any>("");

    // const name = cookies().get("name");

    // formActions({})


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

               

                <div 
                    className='kllkj'
                >

                    <div className='kgjgjhjuwj'>

                        {/* <div className='topBar'>

                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero, harum laborum architecto 

                            <span></span>

                        </div> */}

                        <div className='nfkjsdl' id='nfkjsdl'>

                            <a id='title'>Felipe Andersen</a>

                            <nav>
                              
                                <a href=''><span>#</span><span>Sobre mim</span></a>

                                <a><span>#</span><span>Serviços </span></a>

                                <a><span>#</span><span>Portfólio </span></a>

                                <a href='#contact'><span>#</span><span>Contato </span></a>

                            </nav>

                            <button>Contate agora</button>

                        </div>

                    </div>

                    <div className='ikhgyfrp'>

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


                      
                </div>

                <div className='about'>

                  

                    <div>

                        <div>
                            <img src={"https://img.freepik.com/fotos-gratis/retrato-de-sorrindo-encantador-homem-jovem-em-cinzento-t-shirt-ficar-contra-planicie-fundo_23-2148213406.jpg?w=360"} alt=""/>

                        </div>

                        <div>

                        <h2>Sobre mim</h2>

                        <q>Essas experiências me permitiram desenvolver habilidades interpessoais .</q>
                          
                            <p>
                              Sou graduado(a) em [Nome do Curso] pela [Nome da Universidade], onde adquiri uma sólida base de conhecimento em [Área de Estudo]. Durante minha formação, desenvolvi habilidades analíticas, capacidade de resolução de problemas e uma forte ética de trabalho.
                            </p>
                            {/*<p>
                              Em resumo, sou uma pessoa comprometido com minha carreira, que busca aprendizado contínuo e também sabe a importância de ... Estou ansioso para explorar oportunidades que me permitam crescer e contribuir de forma positiva em um ambiente profissional.
                              </p>*/}

                            {/* <p>
                              Minhas aspirações profissionais incluem [Mencione suas metas e objetivos específicos]. Estou determinado(a) a contribuir de maneira significativa no campo [Sua Área de Interesse e continuar a crescer como profissional.
                            </p>
                            <p>
                              Ao longo dos últimos anos, tive a oportunidade de trabalhar em diversas funções, incluindo [Mencione suas experiências relevantes]. Essas experiências me permitiram desenvolver habilidades interpessoais como escuta ativa, respeito a diversidade e adaptabilidade, qualidades que considero fundamentais para o sucesso em qualquer ambiente de trabalho.
                            </p> */}

                            <div className='jgugg'>

                                <button>Contate-me</button>

                                <div className='ykukkuyy'>

                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>

                                    5

                                </div>

                            </div>

                        

                        </div>
                    
                    </div>
                  
                </div>

                <div className='jfiudf'>

                  <div className='ngjpfgo'>

                      <h2>Habilidades</h2>

                      <span className='btn' title='Voltar'>
                          <BsChevronCompactLeft/>
                      </span>
                      
                      <div className='cwrxplmij'>

                          <span className='blur_left_'/>

                          <span>Métodos ágeis</span>

                          <span>Aprendizado contínuo</span>

                          <span>Gestão de projetos</span>

                          <span>Trabalho em equipe</span>

                          <span>Resolução de Problemas</span>

                          <span>Escrita e documentação</span>

                          <span className='blur_right_'/>


                      </div>

                      <span className='btn' title='Próximo'>
                          <BsChevronCompactRight/>
                      </span>

                  </div>
                  
                  <span className='line'/>

                  <div className='ngjpfgo'> 

                      <h2>Tecnologias</h2>

                      <div className='iuiucxv'>


                      </div>

                      <span className='btn' title='Voltar'>
                          <BsChevronCompactLeft/>
                      </span>

                      <div className='cwrxplmij'>

                        <span>tailwindcss</span>
                        <span>bootstrap</span>
                        <span>styled-components</span>
                        <span>mui</span>
                        <span>nextjs</span>
                        <span>nestjs</span>
                        <span>tanstack</span>
                        <span>postgres</span>
                        <span>redis</span>
                        <span>mysql</span>
                        <span>grafana</span>
                        <span>aws</span>
                        <span>cms</span>
                        <span>linux</span>
                        <span>regex</span>
                        <span>regex</span>

                      </div>

                      <span className='btn' title='Próximo'>
                          <BsChevronCompactRight/>
                      </span>
                  </div>

                  <span className='line'/>

                  <div className='ngjpfgo'> 

                      <h2>Ferramentas</h2>

                      <span className='btn' title='Voltar'>
                          <BsChevronCompactLeft/>
                      </span>

                      <div className='cwrxplmij'>
                          <span>Figma</span>
                          <span>Trello</span>
                          <span>Miro</span>
                          <span>Docker</span>
                          <span>Docker compose</span>
                          <span>Git and Github</span>
                          <span>Vscode</span>
                      </div>

                      <span className='btn' title='Próximo'>
                          <BsChevronCompactRight/>
                      </span>
                    
                  </div>

                </div>

                <div className='portifolio'>

                    <div className='jhkdie'> 

                        <h2 >Portifólio</h2>

                        <span>&</span>

                    </div>
                  
                    <ul className='ffdf'>

                        <Suspense fallback={<></>}>

                        <li>

                          <a href='www.lucakes.com' >Lucakes</a>
                          

                            <picture className='picture'>

                                { 
                                
                                isLoading ? 

                                <img alt="website" src='https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png'></img> 

                                : 

                                <img alt="website"src='https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png'></img> 

                                }

                            </picture>

                            <div className='jnbgyhd statistic'>
                              <span>+ 11k users</span>&#183;
                              <span>20 colaborators</span>&#183;
                              <span>8 dowloads</span>
                            </div>

                            <div className='description' >
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem perferendis. Dicta vitae maxime, ducimus nesciunt rem facere iste voluptatum exercitationem, dolores aperiam, dolor repudiandae in nulla laudantium reprehenderit itaque.
                            </div>

                            <div className='nfiutifgb'>

                                <div className=''></div>

                                <button title='Mostrar mais'><HiOutlineChevronDown/></button>

                                <div className=''></div>

                            </div>

                            <div className='uigugn'>
                                
                                <div className='ubmnrkgi'>

                                    <img src='https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x'></img>

                                     <span className='owner'>Wallace - Diretor chef</span>

                                </div>

                               
                                <span className='hfnmmg'>
                                    <span>"</span>
                                  Lucake é uma plataforma de estudos online, onde o usuário pode se cadastrar e ter acesso a diversas matéri
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime ipsa vero incidunt ad hic quod minus mollitia asperiores. Perferendis hic iste vel impedit autem obcaecati omnis deleniti eveniet deserunt. 
                                    <span>"</span>
                                </span>
                            </div>

                            <div className='gfimfw'>
                             e-commerce
                            </div>

                        </li>

                        </Suspense>

                        <li>

                          <a href='www.lucakes.com' >My service</a>
                          

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
s
                            <span className='line' style={{height:"1px", backgroundColor: "grey", width:"100%"}}/><button>g</button><span className='line'/>

                            <div className='uigugn'>
                                <img src='https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x'></img>
                                <span className='owner'>Wallace - Diretor chef</span>
                                <span className='hfnmmg'>
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime ipsa vero incidunt ad hic quod minus mollitia asperiores. Perferendis hic iste vel impedit autem obcaecati omnis deleniti eveniet deserunt. '
                                </span>
                            </div>

                            <div>
                                <span className='tag'>Landpage</span>
                            </div>

                        </li>

                        <li>

                          <a href='www.lucakes.com' >Genesis</a>
                          

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
                                <span className='tag'>Site institucional</span>
                            </div>

                        </li>

                        <li>

                            <a href='www.lucakes.com' >My blog</a>
                          

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
                                <span className='tag'>Blog</span>
                            </div>

                        </li>

                        <li>

                          <a href='www.lucakes.com' >Lucakes</a>
                          

                            <picture className='picture'>

                                { 
                                
                                isLoading ? 

                                <img alt="website" src='https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png'></img> 

                                : 

                                <img alt="website"src='https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png'></img> 

                                }

                            </picture>

                            <div className='jnbgyhd statistic'>
                              <span>+ 11k users</span>&#183;
                              <span>20 colaborators</span>&#183;
                              <span>8 dowloads</span>
                            </div>

                            <div className='description' >
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, exercitationem perferendis. Dicta vitae maxime, ducimus nesciunt rem facere iste voluptatum exercitationem, dolores aperiam, dolor repudiandae in nulla laudantium reprehenderit itaque.
                            </div>

                            <div className='nfiutifgb'>

                                <div className=''></div>

                                <button title='Mostrar mais'><HiOutlineChevronDown/></button>

                                <div className=''></div>

                            </div>

                            <div className='uigugn'>
                                
                                <div className='ubmnrkgi'>

                                    <img src='https://img.ibxk.com.br/2019/02/17/17124052466014.jpg?ims=328x'></img>

                                     <span className='owner'>Wallace - Diretor chef</span>

                                </div>

                               
                                <span className='hfnmmg'>
                                    <span>"</span>
                                  Lucake é uma plataforma de estudos online, onde o usuário pode se cadastrar e ter acesso a diversas matéri
                                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem maxime ipsa vero incidunt ad hic quod minus mollitia asperiores. Perferendis hic iste vel impedit autem obcaecati omnis deleniti eveniet deserunt. 
                                    <span>"</span>
                                </span>
                            </div>

                            <div className='gfimfw'>
                             game
                            </div>

                        </li>

                    </ul>

                </div>

                <div>
                  hobby
                </div>

                <div className='kfdhfkjd'>
                  
                    <h2>Notícias do X</h2>

                    <ul>

                        <li>
                    

                        </li>

                    </ul>

                </div>

                <div className='jhgumpcf' id='contact'>

                    <Form/>

                </div>

                <footer className=' ouitnvds'>

                    © 2024. Felipe Andersen  

                    <div className='social'>

                      <span>Acompanhe</span>

                        <ol>
                            <li title='Linkedin'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&usqp=CAU"></img>
                            </li>

                            <li title='Github'>
                                <img src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"></img>
                            </li>

                            <li title='X'>
                                <img src="https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_400x400.jpg"></img>
                            </li>

                  
                        </ol>

                    </div>

                    <div>

                        <button>Seus dados</button>

                        <button>Cookies</button>

                        <button>Acessibilidade</button>

                        <button>Language</button>

                    </div>
                    
                </footer>
      
                <ChatButton/>
                
            </div>

            <Social/>

        </Div>
    )
}