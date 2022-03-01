import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Body.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson } from '@fortawesome/free-solid-svg-icons'

const Body = () => {

    const [speakers, setSpeakers] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {

        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setSpeakers(data))

    }, [])

    const handleCart = (speaker) => {
        const newCart = [...carts, speaker];
        setCart(newCart)

        // console.log(newCart);
    }


    let cost = 0;
    for (const cart of carts) {
        cost = cost + cart.payment;


    }


    // console.log(speakers)

    return (
        <div className='body-Container'>
            <div className='participants'>
                {
                    speakers.map(speaker => <Person speaker={speaker}
                        key={speaker.key}
                        handleCart={handleCart}></Person>)
                }
            </div>
            <div className='cart-container'>
                <div className='cart-header'>
                    <h3>Participants added</h3>
                    <p><FontAwesomeIcon icon={faPerson} /> Total Person Added: {carts.length}</p>
                    <p>Total Cost: $ {cost} </p>
                </div>
                <div>
                    {
                        carts.map(cart => <Cart cart={cart}
                            key={cart.key}></Cart>)

                    }
                </div>
                <div>
                    <button>Join Now</button>
                </div>
            </div>

        </div>
    );
};

export default Body;