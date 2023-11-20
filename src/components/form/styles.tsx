'use client'
import styled from "styled-components";


export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 70px 24px;
    background-color: #fffcf5;
    background-color: #f5f5f5;
    width: 500px;
    
    h2 {
        margin: 0 0 12px 0;
        font-size:24px;
    }

    p {
        margin: 0 0 12px 0;
        font-size: 18px;
        max-width: 400px;
    }

    form {
        padding: 24px 0;
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;

        label {
            
            display: flex;
            justify-content: flex-start;
            font-size: 14px;
        }

        input {
            height: 40px;
            border: 1px solid #b9b9b9;
            border-radius: 3px;
            width: 100%;
            padding: 0 0 0 12px;
            
        }

        input.msg {
            height: 120px;
        }
    }

    button {
        height: 40px;
        border-radius: 3px;
        width: 100%;
        background-color: green;
        color: white;
    }

    button:hover {
        height: 40px;
        border-radius: 3px;

        background-color: #00a000;
        color: white;
    }
`;
