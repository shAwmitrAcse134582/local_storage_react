import React, { useEffect, useState } from 'react';
import { multiply } from '../../utilities/calculate';
import Shoe from '../Shoe/Shoe';

const Shoes = () => {
    const first=100;
    const second=5;
    const result=multiply(first,second);
    const [shoes,setShoes]=useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setShoes(data))
    },[])
    return (
        <div>
            <h1>Welcome to shoes department</h1>
            <p>total shoes Price:{result}</p>
            {
                shoes.map(shoe=>
                <Shoe
                key={shoe.id}
                shoe={shoe}
                ></Shoe>)
            }
        </div>
    );
};

export default Shoes;