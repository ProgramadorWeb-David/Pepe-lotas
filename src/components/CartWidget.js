import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const CartWidget = () => {
    return (
        <P>
            <FontAwesomeIcon icon={faCartShopping}/>
        </P>
    );
}

const P = styled.p`
    /* color: #70ec99; */
    color: #FFBF47;
    /* color: #ce9f11; */
    margin-top: 14px;
    font-size: 24px;
    padding: 2px;
    width: 40px;
    border-radius: 50%;

    &:hover {
        transform: scale(1.3);
        cursor: pointer;
        /* background: #ffc000; */
        box-shadow: 0 0 5px #ffc000,
                    0 0 20px #ffc000,
                    0 0 60px #ffc000,
                    0 0 110px #ffc000;
        transition: 0.3s ease;
    }
`;

export default CartWidget;