import React from 'react';


const Cart = (props) => {
    const {cart} = props;
    
   const total = cart.reduce((previusValue, current)=> previusValue + current.salary, 0);
    return (
        <div className="text-white border p-3">
            <h4><i class="fas fa-user"></i> Programmers added {cart.length}</h4>
            <h5>Total Cost: {total} Tk</h5>
                <ol>{
                    cart.map(programmer => <li className="fw-bold">{programmer.name}</li>)
                   }
                </ol>
            <button className="btn btn-warning">Buy Now</button>
        </div>
    );
};

export default Cart;