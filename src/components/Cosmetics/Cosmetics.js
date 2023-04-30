import React from 'react';
import { add } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import add from '../../utilities/calculate';

const Cosmetics = () => {
    const first=100;
    const second=300;
    const total=add(first,second);
    const cosmetics=[
        {
            id:1,name:"churi",price:100
        },
        {
            id:2,name:"cream",price:200
        },
        {
            id:3,name:"makeup",price:500
        },
        {
            id:4,name:"soap",price:50
        }
    ];
    return (
        <div>
            <h1>Welcome to cosmetics Module</h1>
            <p>Total={total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic
                 key={cosmetic.id}
                 cosmetic={cosmetic}
                 >


                </Cosmetic>)
            }
           
        </div>
    );
};

export default Cosmetics;