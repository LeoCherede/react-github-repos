import styled from "styled-components";


export const HomeContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    &: focus,
    &: active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.6 rem;
    border: 4.5px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    position: relative;

    &: focus,
    &: active {
        outline: none;
        box-shadow: none;
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: 0.8rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;