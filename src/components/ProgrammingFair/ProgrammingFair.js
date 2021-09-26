import React, { useEffect, useState } from 'react';
import Programmer from '../Programmer/Programmer';
import Cart from './../Cart/Cart';

const ProgrammingFair = () => {
    // set programmer 
    const [programmers,setProgrammers] = useState([]);

    // set cart 
    const [cart, setCart] = useState([])

    // add to cart function 
    const addToCart = programmer =>{
        const newProgrammer = [...cart,programmer];
        setCart(newProgrammer);
    }

    useEffect(()=>{
        fetch("./programmers.JSON")
        .then(res => res.json())
        .then(data => setProgrammers(data))
    },[])
    return (
        <div className="container">
            <div className="row mt-4">
           <div className="col-md-9">
              <div className="row">
              {
                   programmers.map(programmer => <Programmer 
                    key={programmer.key}
                    programmer={programmer}
                    addToCart={addToCart}
                   />)
               }
              </div>
           </div>

           <div className="col-md-3">
               <Cart cart={cart}/>
           </div>
        </div>
        </div>
    );
};

export default ProgrammingFair;