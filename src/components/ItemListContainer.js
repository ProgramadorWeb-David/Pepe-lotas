import React, { useEffect, useState } from 'react';
import pepeColon from '../assets/img/pepeColon.png';
import '../App.css';
import styled from 'styled-components';
import ItemList from './ItemList';
import { products } from '../utils/productsMock';


const ItemListContainer = ({description}) => {
    const [productos, setProductos] = useState([]);

    const getProducts = new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        } else {
            reject('No hay productos para mostrar!');
        }
    })

    useEffect(() => {
        async function getProductsMock() {
            try {
                const response = await getProducts;
                setProductos(response);
            } catch (error) {
                alert(error);
            }
        }   

        getProductsMock();
    }, []);

    
    return (
        <header className="App-header">
            <ItemList productos={ productos } />
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