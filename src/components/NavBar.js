import React from 'react';
import styled from 'styled-components';
import pelota from '../assets/img/pelota.png';
import CartWidget from '../components/CartWidget';

const NavBar = () => {
    return (
        <Contenedor>
            <ContenedorGrid>
                <div>
                    <Imagen src={ pelota } alt="imagen pelota"/>
                </div>
                
                <div>
                    <Ul>
                        <Li> <Auxiliar>pelotas de :</Auxiliar> </Li>
                        <Li> <Enlaces>vip</Enlaces> </Li>
                        <Li> <Enlaces>mundiales</Enlaces> </Li>
                        <Li> <Enlaces>campito</Enlaces> </Li>
                    </Ul>
                </div>

                <Carrito>
                    <CartWidget />
                </Carrito>
            </ContenedorGrid>
        </Contenedor>
    );
}


const Contenedor = styled.nav`
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    background-color: #333;
    border-bottom: 0.5px solid #70ec99;
`;

const ContenedorGrid = styled.div`
    display: grid;
    grid-template-columns: 5% 80% 15%;
    width: 90%;
    margin: 0 auto;
    align-items: center;
`;

const Imagen = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    padding: 5px;
    margin-top: -3px;
`;

const Ul = styled.ul`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    /* ---- */
    box-sizing: border-box;
    transition: all .35s ease;
`;

const Li = styled.li`
    list-style: none;
    /* ---- */
    display: inline-block;
    list-style: outside none none;
    padding: 0;
`;

const Enlaces = styled.p`
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    padding: 5px;
    margin: 0;
    animation: left 3s linear infinite;

    /* ---- */
    position: relative;
    text-decoration: none;

    ::after, ::before {
        content: '';
        height: 12px;
        width: 12px;
        position: absolute;
        transition: all .35s ease;
        opacity: 0;
    }

    &:before {
        content: '';
        right: 0;
        top: 0;
        border-top: 2px solid #40ff22;;
        border-right: 2px solid #40ff22;;
        transform: translate(-100%, 50%);
    }

    &:after {
        content: '';
        left: 0;
        bottom: 0;
        border-bottom: 2px solid #40ff22;;
        border-left: 2px solid #40ff22;;
        transform: translate(180%, -50%);
    }

    &:hover:before,
    &:hover:after {
        transform: translate(0,0);
        opacity: 1;
    }

    &:hover {
        color: #40ff22;
        cursor: pointer;
    }
`;


const Auxiliar = styled.a`
    font-weight: bold;
    color: #70ec99;
    font-size: 18px;
    padding: 5px;
`;


const Carrito = styled.div`
    margin: 0 auto;
`;

export default NavBar;