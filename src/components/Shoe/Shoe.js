import React from 'react';

const Shoe = (props) => {
    const{id,name,price}=props.shoe;
    return (
        <div>
            <h1>Id: {id}</h1>
            <h2>name: {name}</h2>
            <h3>price: {price}</h3>
        </div>
    );
};

export default Shoe;