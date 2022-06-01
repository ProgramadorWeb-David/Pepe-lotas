import React from 'react';
import styled from 'styled-components';
import pelota1 from '../../assets/img/pelota1.png';

// para traer las imagenes de forma dinámica
// let auxImg = require.context('../../assets/img', true);


const ItemDetail = ( {producto} ) => {

    const { productName, description, talla3, talla4, talla5, precio } = producto;


    return (  
        <Container>
            <Card>
                <ImgBox>
                    {/* <Img src={ auxImg(`./${img}.png`) } alt="imagen pelota" /> */}
                    <Img src={ pelota1 } alt="imagen pelota" />
                </ImgBox>

                <Details>
                    <Title>
                        <h3> {productName} </h3> 
                    </Title>
                    <Description>
                        <h4>Descripción:</h4>
                        <p> {description} </p>
                    </Description>
                    <Size>
                        <h4>Tallas:</h4>
                        <ul>
                            <li> {talla3} </li>
                            <li> {talla4} </li>
                            <li> {talla5} </li>
                        </ul>
                    </Size>
                    <Buy>
                        <Price>
                            <sup>$</sup>
                            <span> {precio} <small>,99</small> </span>
                        </Price>

                        <Btn>
                            <a href="http://localhost:3000/"> Comprar </a>
                        </Btn>
                    </Buy>
                </Details>
            </Card>
        </Container>
    );
}

const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&display=swap');
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(180deg, #4ba9e9, #4ba9e9 50%, #fff 50%, #fff 100%);
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    height: 380px;
    background-color: #fff;
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    transition: 0.8s;

    &:hover > div {
        transform: rotate(-360deg);
    }

    &:hover {
        width: 600px;
    }
`;

const ImgBox = styled.div`
    position: relative;
    min-width: 300px;
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
`;

const Img = styled.img`
    width: 85%;
`;

const Details = styled.div`
    position: relative;
    min-width: 300px;
    background: #4ba9e9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 20px;
    color: #fff;

    & h4 {
        font-size: 0.9em;
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        width: 0;
        height: 0;
        border-bottom: 10px solid transparent;
        border-top: 10px solid transparent;
        border-left: 10px solid #fff;
    }
`;

const Title = styled.div`
    & h3 {
        text-shadow: 0.5px 0.5px 0.5px black;
    }

    & small {
        font-weight: 500;
        font-size: 0.9em;
        margin-top: 0px;
        padding: 0;
    }
`;

const Description = styled.div`
    & h4 {
        text-shadow: 0.5px 0.5px 0.5px black;
    }

    & p {
        font-size: 0.8em;
        font-weight: 500;
    }
`;

const Size = styled.div`
    & h4 {
        text-shadow: 0.5px 0.5px 0.5px black;
    }

    & ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    & ul li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        align-items: center;
        font-size: 0.8em;
        border: solid 1px #fff;
        padding: 0.6em;
    }

    & ul li:hover {
        background-color: #fff;
        color: #4ba9e9;
        cursor: pointer;
    }
`;

const Buy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Price = styled.div`
    & sup {
        color: #fff;
        font-size: 1em;
    }

    font-size: 1.6em;
`;

const Btn = styled.div`
    background: #28A437;
    padding: 0.5em 0.8em;
    text-transform: uppercase;

    & a {
        text-decoration: none;
        color: #fff;
        text-shadow: 0.4px 0.4px 0.4px black;
    }
`;

export default ItemDetail;