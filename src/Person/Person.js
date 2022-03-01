import React from 'react';

import './Person.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Person = (props) => {

    // console.log('This is props', props)


    // console.log(props.speaker)
    const { name, img, age, company, country, position, payment } = props.speaker

    // console.log(props.speaker);
    //  persons added in the body

    return (
        <div className='person-holder'>
            <div className='image-holder'>
                <img src={img} alt="" />
            </div>

            <div className='profile'>

                <h4>Name: {name}</h4>
                <h5>Age: <small>{age}</small></h5>
                <h5>Position: <small>{position}</small></h5>
                <h5>Company: <small>{company}</small></h5>
                <h5>Country: <small>{country}</small></h5>
                <h5>Payment: <small>$ {payment}</small></h5>

            </div>
            <div className='buy-btn'>
                <button onClick={() => { props.handleCart(props.speaker) }}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                <br />
                <img src="../facebook-f-brands.svg" alt="" />
            </div>
        </div>
    );
};

export default Person;