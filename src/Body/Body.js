import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Body.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faMoneyBill, faDollar } from '@fortawesome/free-solid-svg-icons'

const Body = () => {

    const [speakers, setSpeakers] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {

        fetch('products.JSON')
            .then(res => res.json())
            .then(data => setSpeakers(data))

    }, [])

    // new array created for the cart

    const handleCart = (speaker) => {
        const newCart = [...carts, speaker];
        setCart(newCart)

        // console.log(newCart);
    }

    //   total cost calculated
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

                {/* cart header */}

                <div className='cart-header'>
                    <h3>Participants added</h3>
                    <p><FontAwesomeIcon icon={faPerson} /> Total Person Added: {carts.length}</p>
                    <p><FontAwesomeIcon icon={faDollar} /> Total Cost: $ {cost} </p>
                </div>
                <div>
                    {
                        carts.map(cart => <Cart cart={cart}
                            key={cart.key}></Cart>)

                    }
                </div>
                <div>
                    <button className='join-btn'>Join Now</button>
                </div>
            </div>

        </div>
    );
};

export default Body;