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
    background-color: rgba(255, 255, 255, 1);
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
            /* border: 1px solid #b9b9b9; */
            border-radius: 3px;
            width: 100%;
            padding: 0 0 0 12px;
            background-color: #e9e9e9;
        }

        input.msg {
            height: 120px;
            padding: 12px;
            display: flex;

            &::placeholder {
                color: #9b9b9b;
            }
        }

        textarea {
            /* border: 1px solid #b9b9b9; */
            border-radius: 3px;
            width: 100%;
            padding: 0 0 0 12px;
            height: 120px;
            padding: 12px;
            resize: none;
            background-color: #e9e9e9;
        }

        span {
            font-size: 14px;
            /* background-color:red; */
            width: 100%;
            padding: 0 6px;
            margin: -6px 0 0 0;
            display: flex;
            
        }

        
    }

    button {
        height: 40px;
        border-radius: 3px;
        width: 100%;
        background-color: #141414;
        color: white;

        &:hover {
            height: 40px;
            border-radius: 3px;
            background-color: #1b1b1b;
            color: white;
        }
    }
`;
