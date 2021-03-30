import React from 'react';
import Product from './components/product';
import data from './data';


function App() {
  return (
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="/">Aspire</a>
        </div>
        <div>
            <a href="/cart">Carts</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>
    <main>
    <div className="row center">
      {
         data.products.map((product) =>(
         <Product key={product._id} product={product}></Product>
          
         ))
      }
    
    </div>
    </main>
    <footer className="row center">2021 All Right reserved</footer>
    </div>
  );
}

export default App;
