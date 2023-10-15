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
        width: calc(100% - 12%);
        background-color:#aebaca;
        align-items: center;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        padding: 0;
        margin: 0;
        
        .kgjgjhjuwj {

            margin: 0;
            /* margin-top: 20px; */
            height: 70px;
            color: white;
            width: 100%;
            /* width: calc(100% - 12%); */
            font-weight: 600;
            /* -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
            -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
            box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3); */

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

                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 8px 36px;
                background-color: #2D45B2;
                background-color: #2D45B2;
                gap: 24px;
                /* background: rgb(34,193,195);
                background: -moz-linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
                background: -webkit-linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
                background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
                filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#22c1c3",endColorstr="#fdbb2d",GradientType=1); */

                nav {
                    display: flex;
                    gap: 50px;

                    a {
                        height: 36px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 4px;
                    

                        span:nth-child(1) {
                            color: transparent;   
                   
                        }

                        span {
                            height: 32px;
                            margin: 2px 0 0 0;
                        }

                        &:hover {

                            span:nth-child(1) {
                                color: #0099ff;
                            }

                            span:nth-child(2) {
                            border-bottom: 2px solid white;
                            }
                        }

                    }
                }

                button {
                    height: 40px;
                    width: min-content;
                    background-color: #000000;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 24px;
                    font-weight: 600;
                    border-radius: 3px;
                    -webkit-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                    -moz-box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                    box-shadow: 0px 2px 4px -2px rgba(0,0,0,0.3);
                    color: white;
                    -webkit-transition: Margins 2s ease-in;
                    -moz-transition: Margins 2s ease-in;
                    -ms-transition: Margins 2s ease-in;
                    -o-transition: Margins 2s ease-in;
                    transition: Margins 2s ease-in;

                    &:hover {
                        background-color: #414141;
                    }

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
    }

    .kllkj {
        box-sizing: border-box;
        text-align: center;
        display: flex;
        width: 100%;
        padding: 150px 50px;
        height: 101vh;
        align-items: flex-start;
        justify-content: space-between;
        background-color: #3cff00;;
        color: black;
        /* background: #2D45B2;
        background: -moz-linear-gradient(0deg, #2D45B2 0%, #ffe4a9 100%);
        background: -webkit-linear-gradient(0deg, #2D45B2 0%, #ffe4a9  100%);
        background: linear-gradient(0deg, rgba(34,193,195,1) 0%, #ffe4a9  50%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#22c1c3",endColorstr="#ffe4a9 ",GradientType=1); */
        /* border-radius: 0 0 10px 10px; */
        margin: 0 0 8px 0;


        div {
            margin-top: -50px;
            width: 50%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-direction: column;
            background-color: #3cff00;
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

        div:nth-child(1), div:first-child, .ajgnmo{
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            height: 100%;
            font-weight: 600;

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
        padding: 46px 46px;
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
    }

    .portifolio {
        padding: 46px 24px;
        background-color: #ffffff;
        
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
            padding:12px 12px;

            li {
                box-sizing: border-box;
                background-color: #ffffff;
                max-width: 350px;
                min-width: 350px;
                /* outline: 3px dotted rgba(54,35,78,1); */
                padding: 24px 12px;
               
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
    
                    img {
                        width: 100%;
                        margin: 24px 0 12px 0; 
                        border: 1px solid rgba(255,255,255,0);
             
                 
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

                .uigugn {
                    font-size: 14px;
                    margin: 12px 0 24px 0;
                    display: flex;
                    flex-direction: column;
                    background-color: transparent;
                justify-content: flex-start;
                text-align: center;
                align-items: center;

                img {
                        height: 50px;
                        width: 50px;
                        overflow: hidden;
                        border-radius: 55555px;
                        margin: 16px;
                    }

                    .owner {
                        padding: 0;
                        font-weight: 600;
                        margin: 0 0 16px 0; 
                    }

                    span {
                        height: min-content;
                        margin: 0;
                        color: #000000;
                    }

                    .tag {
                        height: 50px;
                        width: 200px;
                        font-size: 10px;
                        padding: 3px 16px;
                        border-radius: 50%;
                        border: 2px solid red;
                        font-weight: 600;

                        color: #252525;
                        background-color: rgb(228, 228, 228);

                        &:hover {
                            background-color: rgb(255, 72, 0);
                        
                        }

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

    .mgjtufnf {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        padding: 46px 24px;
        background-color: #fffcf5;
        background-color: #ffffff;
        margin: 0 0 8px 0;
        height: 100vh;
        width: 100%;

        h2 {
            margin: 0 0 12px 0;
            font-size:24px;
        }
    }
`;