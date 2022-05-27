import React from 'react';
import Item from './Item';
import styled from 'styled-components';


const ItemList = ( {productos} ) => {

    return (
        <Flex>
            {
                productos.map( (producto, index) => {
                    return (
                        <div key={index}>
                            <Item producto={producto} />
                        </div>
                    )
                })
            }
        </Flex>
    )
}

const Flex = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 0px auto 150px auto;
`;

export default ItemList;