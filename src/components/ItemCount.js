import React, { useState } from 'react';
import styled from 'styled-components';


const ItemCount = ({stock, initial}) => {
    const [contador, setContador] = useState(initial);
    const [disponible, setDisponible] = useState(stock);


    const decremento = () => { contador > 0 && setContador(contador - 1) }

    const incremento = () => { stock > contador ? setContador(contador + 1) : alert('No hay más stock!') }

    const disponibleMenos = () => { contador < stock && setDisponible( disponible - 1 ) }

    const disponibleMas = () => { contador > 0 && setDisponible( disponible + 1 ) }

    return ( 
        <Contenedor>
            <Titulo>Stock disponible: <Stock> {disponible - initial} </Stock> </Titulo>

            <P>Cantidad de productos a comprar:</P>
            <Flex>
                <Decremento onClick={() => {
                    decremento();
                    disponibleMas();
                }}> - </Decremento>

                <Numero> {contador} </Numero>

                <Incremento onClick={() => {
                    incremento();
                    disponibleMenos();
                }}> + </Incremento>
            </Flex>

            <BtnCarrito onClick={() => { alert('Agregado Correctamente!') }}>Agregar al carrito</BtnCarrito>
        </Contenedor>
    );
}


const Contenedor = styled.div`
    width: 24%;
    margin: auto;
    padding: 10px;
    background-color: #ccc;
    border: 0.6px solid #70ec99;
    border-radius: 20px;
`;

const Titulo = styled.p`
    margin: 0 auto;
    padding: 3px;
    color: #1616E7;
    font-weight: bold;
    font-size: 20px;
    width: 90%;
    border-bottom: 1px solid #333;
`;

const Stock = styled.span`
    color: green;
`;

const P = styled.p`
    color: #333;
    font-weight: bold;
    font-size: 15px;
    margin: 25px 0 -15px 0;
`;

const Flex = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 20px auto;
    padding: 10px 0px;
    width: 90%;
    border: .6px solid #17A8AC;
    border-radius: 30px;
`;

const Decremento = styled.button`
    /* border: 1px solid red; */
    color: white;
    background-color: #84070C;
    font-weight: bold;
    font-size: 20px;
    border-radius: 80%;
    width: 10%;
    transition: all 400ms;

    &:hover {
        cursor: pointer;
        background-color: #EB3222;
        transform: scale(1.2);
    }
`;

const Incremento = styled.button`
    /* border: 1px solid green; */
    color: white;
    background-color: green;
    font-weight: bold;
    font-size: 20px;
    border-radius: 80%;
    width: 10%;
    transition: all 400ms;

    &:hover {
        cursor: pointer;
        background-color: #17F51D;
        transform: scale(1.2);
    }
`;

const Numero = styled.div`
    width: 10%;
    background-color: #282c34;
`;

const BtnCarrito = styled.button`
    padding: 8px 16px;
    margin: 10px 0;
    color: #e0e0e0;
    font-size: 18px;
    letter-spacing: 2px;
    border: 1px solid #333;
    border-radius: 6px;
    background: linear-gradient(90deg, #0162c8, #4CC0F6);
    transition: all 400ms;

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        color: white;
        animation: blink 3s infinite linear;
        outline: 2px solid white;

        @keyframes blink {
            0% {
                background: #207238;
            }
            25% {
                background: #449E62;
            }
            50% {
                background: #3EA363;
            }
            75% {
                background: #3D9C63;
            }
            100% {
                background: #207238;
            }
        }
    }
`;

export default ItemCount;