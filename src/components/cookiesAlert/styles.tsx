'use client'

import styled from "styled-components"

export const Div = styled.div`
   display:none;
   position:fixed;
   bottom:0;
   width: 350px;
   height: min-content;
   background-color: #fafafa;
   background-image: url('https://img.freepik.com/fotos-premium/arte-abstrata-arte-aquarela-chinesa-fundo-colorido-textura-design-simples-pintura-de-lavagem-de-tinta_912113-187518.jpg');
   margin: 0 0 24px 24px;
   flex-direction: column;
   padding: 24px;
   align-items: center;
   justify-content: center;
   gap: 12px;
   -webkit-box-shadow: 0px 0px 37px -7px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 37px -7px rgba(0,0,0,0.75);
box-shadow: 0px 0px 37px -7px rgba(0,0,0,0.75);
font-size: 14px;

   div:nth-child(1) {
      display: flex;
      gap: 12px;

      p a {
         text-decoration: underline;
      }
  

      span {
         svg {
            width: 35px;
         height: 35px;
         }
      }
   }


   div:nth-child(2) {
      display: flex;
      gap: 12px;
   

   button {
      width: min-content;
      height: 40px;
      /* border-radius: 3px; */
      background-color: rgba(46, 46, 46, 1);
      padding: 0 24px;
      color: white;
      font-weight: 600;
      white-space: nowrap;


      &:hover {
         background-color: rgba(46, 46, 46, 0.9);
      }
   
   }

   button:nth-child(2) {
      width: min-content;
      height: 40px;
      /* border-radius: 3px; */
      background-color: #c5c5c5;
      padding: 0 24px;
      color: #2c2c2c;
      font-weight: 600;
      white-space: nowrap;


      &:hover {
         background-color: rgba(46, 46, 46, 0.9);
      }
   
   }
}



`