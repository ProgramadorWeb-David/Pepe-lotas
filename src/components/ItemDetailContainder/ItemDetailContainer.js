import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { product1 } from '../../utils/productsMock';


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});

    const getItem = () => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (product1.stock > 0) {
                    resolve(product1)
                } else {
                    reject('No hay stock!')
                }
            }, 2000)
        });
    }

    useEffect(() => {
        getItem()
            .then( response => { 
                setProducto( response );
            })
            .catch( err => {
                setProducto( err );
            })
    }, []);


    return (
        <>
            <ItemDetail producto={ producto } />
        </>
    );
}

export default ItemDetailContainer;