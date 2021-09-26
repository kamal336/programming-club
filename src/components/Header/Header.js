import React from 'react';
import './Header.css';

const Header = () => {
    return (
      <div>
        <div className="">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
           <div class="container fw-bold fs-italic">
             <a class="navbar-brand text-warning" href="/brand">
              Programmer Club
              </a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                 <li class="nav-item">
                  <a class="nav-link active " aria-current="page" href="/home">Home</a>
                 </li>
                 <li class="nav-item">
                  <a class="nav-link text-white" href="/shop">Programming Contest</a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link text-white" href="/review">Workshop</a>
                 </li>
                 <li class="nav-item">
                  <a class="nav-link text-white" href="/about">About Us</a>
                 </li>
                </ul>
              </div>
           </div>
          </nav>
       </div>

       <div className="container bg-info text-center p-3 rounded">
         <h1 className="heading-style">Programming Contest Justice Panel</h1>
         <p className="para-style">We are searching outstanding programmers and successful programmers for judgement.</p>
         <h2 className="heading-style">Total Badget: 33,00000 Tk</h2>
        </div>
     </div>  
    
    );
};

export default Header;