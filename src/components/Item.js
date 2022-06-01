import React from 'react';
import styled from 'styled-components';
import ItemCount from './ItemCount';
import pelota1 from '../assets/img/pelota1.png';

// para traer las imagenes de forma dinámica
// const prueba = require.context('../assets/img', true);



const Item = ( {producto} ) => { 

    const {productName, stock, initial} = producto;

    return (
        <>
            <Container>
                <Box>
                    <Name> {productName} </Name>
                    <Buy>Campito</Buy>
                    <Circle />
                    {/* <Product src={ prueba(`./${img}`) } alt="imagen pelota" /> */}
                    <Product src={ pelota1 } alt="imagen pelota" />
                </Box>
                
                <ItemCount stock={ stock } initial={ initial } />
            </Container>
        </>
    );
}


const Container = styled.div`
    /* position: relative; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* width: 400px; */
    width: 360px;
    margin-top: 40px;
    transform-style: preserve-3d;
`;

const Box = styled.div`
    position: relative;
    width: 300px;
    height: 500px;
    padding-bottom: 50px;
    margin: 4px;
    background: #232323;
    border-radius: 20px;
    transform-style: preserve-3d;

    &:hover {
        border: 1px solid #379bf7;
    }

    &::before {
        content: 'Pepe';
        position: absolute;
        top: 30px;
        left: 50px;
        font-size: 3em;
        font-weight: 900;
        color: white;
        font-style: italic;
        opacity: 0;
        transition: 0.5s;
    }

    &::after {
        content: 'Lotas';
        position: absolute;
        bottom: 60px;
        right: 30px;
        font-size: 3em;
        font-weight: 900;
        color: white;
        font-style: italic;
        opacity: 0;
        transition: 0.5s;
    }

    &:hover::before,
    &:hover::after {
        opacity: 0.05;
    }

    &:hover > h2 {
        top: 5px;
        opacity: 1;
    }

    &:hover p {
        bottom: 20px;
        padding: 8px;
        opacity: 1;
    }

    &:hover img {
        transform: translate3d(-50%, -50%, 100px) rotate(-15deg);
    }
`;

const Name = styled.h2`
    position: absolute;
    top: -20px;
    left: 0;
    text-align: center;
    color: #fff;
    width: 100%;
    transform-style: preserve-3d;
    transform: translate3d(0, 0, 75px);
    transition: 0.5s;
    opacity: 0;
    z-index: 10;
`;

const Buy = styled.p`
    position: absolute;
    bottom: 0;
    left: 50%;
    text-shadow: 1px 1px 1px black;
    line-height: 25px;
    transform-style: preserve-3d;
    transform: translate3d(-50%, 0, 75px);
    color: white;
    /* background: #379bf7; */
    background: #9bdc28;
    /* background: #fb4b4f; */
    padding: 4px 8px;
    border-radius: 30px;
    text-decoration: none;
    transition: 0.5s;
    opacity: 0;
    z-index: 10;
`;

const Circle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transition: 0.5s;
    /* background: #379bf7; */
    background: #9bdc28;
    /* background: #fb4b4f; */
    transform-style: preserve-3d;
    z-index: 10;
    opacity: 0.2;
    transform: translate3d(-50%, -50%, 50px);
`;

const Product = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 200px;
    transition: 0.5s;
    z-index: 12;
    transform-style: preserve-3d;
    transform: translate3d(-50%, -50%, 0px) rotate(-15deg);
`;

export default Item;