'use client'

import styled from "styled-components"


export const Div = styled.div`
    display: flex;
    justify-content: center;
    /* font-family: 'Josefin Sans', sans-serif; */
    font-family: 'DM Sans', sans-serif;
    font-family: 'system-ui', sans-serif;
    font-family: 'Blinker', sans-serif;
    background-color: #ececec;
    font-weight: 400;
    letter-spacing: 0.5;
    line-height: 22px;
    font-family: 'Jost', sans-serif;
    

    .fmnuebf {
        width: 6%;
        height: 100vh;
        writing-mode: vertical-rl;
        white-space: nowrap;
        transform: rotate(180deg);
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        top: 0;
        background-color: #000000;
        margin: 0 0 0 calc(-100% + 6%);
        color: white;
        font-weight: 600;
    }

    .content {
        box-sizing: border-box;
        width: 100%;
        width: calc(100% - 6%);
        background-color:#aebaca;
        align-items: center;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 0;
        margin: 0 0 0 6%;
    }

    .kllkj {
        box-sizing: border-box;
        text-align: center;
        display: flex;
        width: 100%;
        /* padding: 150px 50px; */
  
        margin: 0;
        /* align-items: space-between; */
        justify-content: flex-start;
        background-color: #3cff00;;
        color: black;
        /* background: #2D45B2;
        background: -moz-linear-gradient(0deg, #2D45B2 0%, #ffe4a9 100%);
        background: -webkit-linear-gradient(0deg, #2D45B2 0%, #ffe4a9  100%);
        background: linear-gradient(0deg, rgba(34,193,195,1) 0%, #ffe4a9  50%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#22c1c3",endColorstr="#ffe4a9 ",GradientType=1); */
        /* border-radius: 0 0 10px 10px; */
        margin: 0 0 8px 0;
        flex-direction: column;

        .kgjgjhjuwj {
            /* margin-top: 20px; */
            height: 70px;
            color: #12263f;
            width: 100%;
            /* width: calc(100% - 12%); */
            font-weight: 600;
            /* -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
            -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
            box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3); */
            background-color: #c43838;
            .topBar {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 36px;
                background-color: #e9e9e9;
                gap: 24px;
                font-size: 13px;
                display: none;
            }

            .nfkjsdl {
                height: 70px;
                white-space: nowrap;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 8px 36px;
                width: 100%;
                flex-direction: row;
          
                background-color: #12263f;
                /* background-color: transparent; */
                gap: 0 24px;
                /* background: rgb(34,193,195);
                background: -moz-linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
                background: -webkit-linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
                background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#22c1c3",endColorstr="#fdbb2d",GradientType=1); */

                a {
                    color: white;
                }


                nav {
                    width: 100%;
                    display: flex;
                    gap: 0 12px;

                    a {
                        height: 36px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 4px;
                        padding: 0 12px;
                        
                        &:hover {
                            background-color: #1e3757;
                        }
                    

                        span:nth-child(1) {
                            color: transparent;   
                   
                        }

                        span {
                            height: 32px;
                            margin: 2px 0 0 0;
                        }

                        /* &:hover {

                            span:nth-child(1) {
                                color: #0099ff;
                            }

                            span:nth-child(2) {
                            border-bottom: 2px solid white;
                            }
                        } */

                    }
                }

                button {
                    height: 40px;
                    width: min-content;
                    background-color: #dbdbdb;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 20px;
                    font-weight: 600;
                    border-radius: 55px;
                    -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                    -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                    box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                    color: #000000;
                
                 

                    &:hover {
                        background-color: white;
                        transition:background-color 300ms ease-in-out 0s;
                        transform: scale(116%);
                        transition: transform 500ms ease 0s;
                    }

                   
                }
            }
        }

        .ikhgyfrp {
            display: flex;
            width: 100%;
            background-color: #b9b9b9;
        }


        div {
            /* margin-top: -50px; */
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            background-color: #c8e4ff;
            text-align: start;
          
      
            span {
                font-size: 60px;
                font-weight: 700;
                color: transparent;
                color: #12263f;
                /* color: #040f41; */
                line-height: 65px;
                font-weight: 600;
                letter-spacing: 0.5;
            }

            span:nth-child(1) {
                /* -webkit-text-stroke-width: 4px;
                -webkit-text-stroke-color: #bbff00; */
     
                font-weight: 900;
                letter-spacing: 0.5px;
                /* text-shadow: 
               -5px -5px 0px #FFF, 
               -5px 5px 0px #FFF,                    
                1px -1px 0px #FFF,                  
                1px 0px 0px #FFF; */
                /* background-color: red; */
            }

            span:nth-child(2) {
                font-size: 16px;
                font-weight: 600;
                color: #405BD3;
                color: white;
                color: #a8b8ff;
                margin: 30px 0 0 0;
                line-height: 30px;
                /* background-color: red; */
            }
        }

        .ajgnmo{
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            height: 100%;
            font-weight: 600;
            padding: 70px 48px;

            span:nth-child(2) {
                font-weight: 600;
            }
        }

        .jikutd {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }


    /* .jkjdf{
        font-size:24px;
        font-weight: 700;

        div {
            width:500px;
            height: 500px;
            overflow: hidden;
            border-radius: 500px 50px 500px 500px;
            img {
                width:120%;
                transform: scale(110%);

            }
        }

    } */

    span{
        color: #000000;
    }

    /* .second-child {
        margin: 8px 0 ;
        font-weight: 500;
        color: #2c2c2c;
    } */

    button {
        width: min-content;
        white-space: nowrap;
        display: flex;
        align-items: center;
        padding: 24px;
        height: 46px;
        background-color: #ff5e00;
        border-radius: 5454545px;
        font-size: 12px;
        color: #000000;
        font-weight: 600;
    }
}

    .about {
        padding: 90px 46px;
        width: 100%;
        font-size: 16px;
        color: #ffffff;
        height: 99vh;
        line-height: 30px;
        background-color: #270536;
        font-weight: 500;
        letter-spacing: 0.6px;
        font-family: 'Jost', sans-serif;
        margin: 0 0 8px 0;

       

        div {
            display: flex;

            div:nth-child(1) {
                width: 50%;
                align-items: center;

                img {
                    width: 80%;
                    /* outline: 10px ridge rgba(255, 255, 255, 0.6); */
                    border-bottom: 16px solid transparent;
                    border-right: 16px solid transparent;
                   

                    /* -webkit-box-shadow: 5px 5px 0px 5px #ffffff; 
                    box-shadow: 5px 5px 0px 5px #ffffff; */
                }
            }

            div {
                width: 50%;
                flex-direction: column;
                font-size: 18px;
              

                h2 {
                    margin: 0 0 36px 0;
                    font-size:28px;
                    width: 100%;
         
                }

                q { padding: 0 16px 0 36px;
                    border-left: 3px solid orange;
                    font-size: 24px;
                    font-weight: 800;
                    color: orange;
                    line-height: 32px;
                    margin-bottom: 24px;
               
                }

                p {
                    color: #ceacdd;
                }

                .jgugg {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    /* background-color:red; */
                    padding: 0;
                    width: min-content;
                    gap: 32px;
                    height: min-content;

                    .ykukkuyy{
                        display: flex;
                        flex-direction: row;

                        svg {
                            fill: yellow;
                        }
                    }

                    button {
                        height: 40px;
                    width: min-content;
                    background-color: #dbdbdb;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 20px;
                    font-weight: 600;
                    border-radius: 55px;
                    -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                    -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                    box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                    color: #000000;
                
                    transform: translate(0px, 0px);
                    transition: transform 500ms ease 0s;

                    &:hover {
                        background-color: white;
                        transition:background-color 300ms ease 0s;
                        transform: translate(0px, -3px);
                        transition: transform 100ms ease 0s;
                    }
                        
                    }

                }

                .ykukkuyy{
                    display: flex;
                    flex-direction: row;
                    margin: 16px 0 0 0;

                    svg {
                        fill: yellow;
                    }
                }

                button {
                    height: 50px;
                    border-radius: 545454px;
                    background-color: #dbdbdb;
                    width: min-content;
                    white-space: nowrap;
                    padding: 0 16px;
                    margin: 36px 0 0 0;
                    color: black;
                    
                }
            }
        }
    }

    .jfiudf {
        display: flex;
     
        width: 100%;
        padding: 70px 24px;
        background-color: #161616;
        margin: 0 0 8px 0;
        gap:12px;
        flex-direction: column;

        .line {
               width: 100%;
            height: 1px;
            border: 1px solid white;
        }

        div{
            display: flex;
            align-items: center;
            padding: 24px 0;
            gap:12px;

            .cwrxplmij {
                box-sizing: border-box;
                width: 70%;
                height: 70px;
                overflow: hidden;
          
                padding: 0 0px;
                white-space: nowrap;

                .blur_left_, .blur_right_ {
                    position: absolute;
                    height: 70px;
                    width: 35px;
                    background-color:red;
                    border-radius: 0px;
                    margin: 0 0px 0 0;
                    background-color: #161616;
                    background: rgb(22,22,22);
                    background: rgb(22,22,22);
                    background: -moz-linear-gradient(90deg, rgba(22,22,22,1) 0%, rgba(22,22,22,0) 100%);
                    background: -webkit-linear-gradient(90deg, rgba(22,22,22,1) 0%, rgba(22,22,22,0) 100%);
                    background: linear-gradient(90deg, rgba(22,22,22,1) 0%, rgba(22,22,22,0) 100%);
                    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#161616",endColorstr="#161616",GradientType=1);
                    padding: 0;

                    &:hover {
                        background-color: transparent;
                        transition:background-color 0.7s ease 0s;
                    }
                }

                .blur_right_ {
                    transform: scaleX(-1);
                    margin: 0 0 0 calc(70% - 117px);
                }

                span {
                    width: min-content;
                    height: 70px;
                    background-color: #bebebe;
                    border-radius: 555555px;
                
                    padding: 24px;
                    white-space: nowrap;

                    &:hover {
                        background-color: white;
                        transition:background-color 0.7s ease 0s;
                    }
                }
            }

            h2 {
                margin: 0 36px 0 0; 
                font-size:24px;

                color: white;
            }

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #303030;
                width: 35px;
                height: 35px;
                padding: 0;

                svg {
                    transform: scale(100%);
                    fill: white;
                }

                &:hover { 
                    background-color: #505050;
                }
            }

            span {
                width: min-content;
                height: 70px;
                background-color: #dbdbdb;
                border-radius: 555555px;
               
                padding: 24px;
                white-space: nowrap;
            }

            span:hover {
                background-color: white;
            }
        }
    }

    .portifolio {
        padding: 46px 24px;
        background-color: white;
        margin: 0 0 8px 0;

        .jhkdie {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            /* background-color: white; */
            margin: 0 0 12px 0;
          
            .quoty {
                font-weight: 600;
                text-align: center;
                font-size: 24px;
                font-family: 'Caveat', cursive;
                line-height: 30px;
                text-decoration: #ff7842 wavy underline;
            } 

            span {
                width:33%;
                max-width: 400px;
                display: flex;
                justify-content: right;
            }

            h2 {
                width:33%;
                margin: 0 0 12px 0;
                font-size:24px;
            }
        }

        h2 {
            margin: 0 0 12px 0;
            font-size:24px;
        }

        Ul {
            overflow: hidden;
            gap: 24px;
            padding:0;
            display: flex;
            justify-content: flex-start;

            li {
                box-sizing: border-box;
                background-color: #ffffff;
                max-width: 350px;
                min-width: 350px;
                /* outline: 3px dotted rgba(54,35,78,1); */
                padding: 24px 12px;
               height: min-content;
                font-size: 15px;
                /* -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3); */
                 border: 1px solid #f5f5f5;
                border-bottom: 2px solid #dbdbdb;
        
                -webkit-transition: Margins 2s ease-in;
                -moz-transition: Margins 2s ease-in;
                -ms-transition: Margins 2s ease-in;
                -o-transition: Margins 2s ease-in;
                transition: Margins 2s ease-in;

                @keyframes Margins {

                    0% {
                        margin-bottom: 0px;
                    }
                    50% {
                        margin-bottom: 2px;
                    }
                
                    100% {
                    margin-bottom: 5px;
                    }
                }
              
                a {
                    font-weight: 700;
                    color: #0099ff;
                }

                .description {
                    margin: 24px 0;
                    padding: 0 12px;
                }

            /* div:first-child {
                margin: 12px 0 0 0;
                font-size: 12px;

                span:nth-child(2) {
                    font-size: 13px;
                    line-height: 13px;
                }
            } */

                picture {
                    overflow: hidden;
    
                    img {
                        width: 100%;
                        margin: 24px 0 12px 0; 
                        border: 1px solid rgba(255,255,255,0);

                        &:hover {
                            transform: scale(105%);
                            transition: transform 1s ease 0s;
                        }
             
                 
                    }
                }

                .jnbgyhd {
                    white-space: nowrap;
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    margin: 0 0 12px 0;
                    background-color: #f8f8f8;
                    padding: 12px;

                    span {
                        font-size: 14px;
                        border-bottom: 2px solid black;
                        font-weight: 600;
                    }
                }

                .kgieponr {
                    width: 100px;
                    height: 40px;
                    background-color: rgba(237, 237, 237);
                    /* border:1px solid rgba(237, 237, 237); */
           
                }

                .nfiutifgb {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin: 0 0 24px 0;

                    div {
                        height: 1px;
                        width: 100%;
                        background-color: #f5f5f5;
                    }

                    svg {
                        transform: scale(130%);
                        stroke: grey;
                    }



                }

                .uigugn {
                    font-size: 14px;
                    margin: 12px 0 24px 0;
                    display: none;
                    flex-direction: column;
                    background-color: transparent;
                    justify-content: flex-start;
                    align-items: center;
                    background-color: #1d1d1d;
                    padding:  24px 12px;

                    
                    .ubmnrkgi {
                        display: flex;
                        align-items: center;
                        /* background-color: red; */
                        gap: 12px;


                        img {
                            height: 50px;
                            width: 50px;
                            overflow: hidden;
                            border-radius: 55555px;
                        
                        }

                        .owner {
                            padding: 0;
                            font-weight: 600;
                        
                        }
                    }

                    span {
                        height: min-content;
                        margin: 0;
                        color: white;
                        padding: 12px;
                    }

                    
                }

                .gfimfw {
                    height: 28px;
                    font-size: 13px;
                    width: min-content;
                   white-space: nowrap;
                    border-radius: 50px;
                    font-weight: 600;
                    color: rgb(87, 27, 94);
                    background-color: rgb(209, 190, 211);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 14px;

                    transform: translate(0px, 0px);
                    transition: transform 500ms ease 0s;

                    &:hover {
                        transform: translate(0px, -3px);
                        transition: transform 300ms ease 0s;
                    }

                    
                    
                }
            }
        }
    }

    .kfdhfkjd {
        padding: 46px 24px;
        background-color: #fffcf5;
        background-color: #6cdfd5;
        margin: 0px 0 8px 0;
        height: 100vh;
        width: 100%;
       
        h2 {
            margin: 0 0 12px 0;
            font-size:24px;
        }

        Ul {
            overflow: hidden;
            gap: 24px;
            display: flex;
            padding: 12px 0;

            li {
                box-sizing: border-box;
                background-color: #ffffff;
                max-width: 350px;
                min-width: 350px;
                min-height: 400px;
                /* outline: 3px dotted rgba(54,35,78,1); */
                padding: 24px 12px;
                /* -webkit-box-shadow: 7px 7px 0px 0px #A6A6A6; 
                box-shadow: 7px 7px 0px 0px #A6A6A6; */
                /* border-top: 3px solid grey;
                -webkit-box-shadow: 0px -3px 0px 0px #000000; 
                box-shadow: 0px -3px 0px 0px #000000; */
                font-size: 15px;
                -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                -webkit-transition: Margins 2s ease-in;
                -moz-transition: Margins 2s ease-in;
                -ms-transition: Margins 2s ease-in;
                -o-transition: Margins 2s ease-in;
                transition: Margins 2s ease-in;

                @keyframes Margins {

                    0% {
                        margin-bottom: 0px;
                    }
                    50% {
                        margin-bottom: 2px;
                    }
                
                    100% {
                    margin-bottom: 5px;
                    }
                }

                &:hover {
                    margin-bottom: 5px;
                }
            }
        }
    }

    .jhgumpcf {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin: 0 0 8px 0;
        width: 100%;
        padding: 70px 24px;
        background-color: #ffffff;
        background-image: url("https://cutewallpaper.org/21/abstract-black-wallpaper/61010888.jpg");
  
        
    }


        


    footer {
        height: 70px;
        background-color: #161616;
        color: white;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 36px;

        .social {
            display: flex;
            align-items: center;
  
            ol {
                display: flex;
                gap: 12px;
                justify-content: center;
                align-items: center;
                /* margin-bottom: 24px; */

                li {
                    opacity: 0.8;
                    width: 40px;
                    height:40px;
                    overflow: hidden;
                    padding: 0;
                    margin: 1px 0;
                    img{
                        width: 100%;
                    }

                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }

        div {
            display: flex;
            gap: 12px;
            
        }

    }
`;