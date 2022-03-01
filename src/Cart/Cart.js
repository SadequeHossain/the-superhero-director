import React from 'react';
import './Cart.css'


const Cart = (props) => {

    const { img, name, payment } = props.cart;



    return (
        <div>

            <div className='person-added'>
                <img src={img} alt="" />

                <p>{name}</p>
            </div>


        </div>
    );
};

export default Cart;