import React from 'react';
import pepeColon from '../assets/img/pepeColon.png';
import '../App.css';
import styled from 'styled-components';
import ItemCount from './ItemCount';


const ItemListContainer = ({description}) => {
    return (
        <header className="App-header">
            <ItemCount stock={3} initial={1} />
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