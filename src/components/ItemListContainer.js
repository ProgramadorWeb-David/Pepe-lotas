import React from 'react';
import pepeColon from '../assets/img/pepeColon.png';
import '../App.css';
import styled from 'styled-components';


const ItemListContainer = ({description}) => {
    return (
        <header className="App-header">
            <img src={ pepeColon } alt="imagen pepe de colon"/>
            <P> {description} </P>
        </header>
    );
}

const P = styled.p`
    font-weight: bold;
    color: #70ec99;
    font-size: 40px;
`;

export default ItemListContainer;