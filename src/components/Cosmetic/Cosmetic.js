import React from 'react';
import './Cosmetic.css';
import { add } from '../../utilities/calculate';
import { addToDb, removeCartdb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {id,name,price}=props.cosmetic;

    const addTocart=(id)=>{
        // console.log("Item is added",id);
        addToDb(id);
    }
    const addParam=()=>addTocart(id);

    const removeCart=id=>{
        removeCartdb(id);
    }

    return (
        <div className='product'>
            <h1>ID:{id}</h1>
            <h2>Buy this:{name}</h2>
            <h3>price:{price}</h3>
            <button onClick={addParam}>Add to cart</button>
            <button onClick={()=>addTocart(id)}>Purchase</button>
            <button onClick={()=>removeCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;