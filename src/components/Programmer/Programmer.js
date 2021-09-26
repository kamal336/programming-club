import React from 'react';
import './Programmer.css'

const Programmer = (props) => {
    //  destructuring 
    const {name,designation,img,lives,salary,website_link} = props.programmer;
   
    return (
        
        <div className="col-md-4 mb-3">
          <div className="card text-center h-100 bg-info ">
           <div className="text-center">
           <img src={img} style={{width:'100px'}} className="card-img-top rounded-circle mt-3" alt="..."/>
           </div>
            <div className="card-body">
              <h5 className="card-title programer-name">{name}</h5>
              <h6 className="card-text programer-des">{designation}</h6>
              <p className="live-in">Lives in: {lives}</p>
              <p><a className="programer-des" target="blank" href={website_link}>Website Link</a></p>
              <p className="">Salary: {salary} Tk</p>
              <button onClick={()=>props.addToCart(props.programmer)}  className="btn btn-warning"><i className="fas fa-cart-plus"></i>Add to Cart</button>
            </div>
          </div>
        </div>
    
    );
};

export default Programmer;