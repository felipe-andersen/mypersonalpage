'use client'

import styled from "styled-components"

export const Div = styled.div`
    width: 6%;
    height: 100vh;
    position: fixed;
    bottom: 0;
    right: 0;
    /* margin: 0 30px 0 0; */
    background-color: white;
    display: flex;
        flex-direction: column;
    justify-content: center;
        align-items: center;
        gap: 12px;

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height:40px;
        background-color: rgba(1,1,1,0.2);
 
        border-radius: 2454545px;
    }

    span.pageUp {
        width: 30px;
        height:30px;
        background-color: black;
    }

    ol {
        display: flex;
        flex-direction: column;
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

`