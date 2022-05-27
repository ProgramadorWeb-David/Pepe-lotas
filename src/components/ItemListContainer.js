import React, { useEffect, useState } from 'react';
import pepeColon from '../assets/img/pepeColon.png';
import '../App.css';
import styled from 'styled-components';
import ItemList from './ItemList';


const ItemListContainer = ({description}) => {
    const [productos, setProductos] = useState([]);

    const products = [
        { id: 1, productName: 'Blizz', img: '../assets/img/pelota1.png', stock: 3, initial: 1 },
        { id: 2, productName: 'Penalty', img: '../assets/img/pelota2.png', stock: 5, initial: 1 },
        { id: 3, productName: 'Nassau', img: '../assets/img/pelota3.png', stock: 2, initial: 1 },
        { id: 4, productName: 'Penalty', img: '../assets/img/pelota4.png', stock: 8, initial: 1 }
    ];

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

    console.log(productos);

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