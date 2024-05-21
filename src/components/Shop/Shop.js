import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.js'; // Corrected file extension
import './Shop.css'
import Product from '../Product/Product.js';
import Summary from '../Summary/Summary.js';
import { addToDb } from '../../utilities/fakedb.js';



const Shop = () => {
    const first10=fakeData.slice(0,20);
    const [products, setProducts] = useState([first10]);
    useEffect(() => setProducts(first10),[]);

    const [cart,setCart]=useState([])

   const handleAddProduct = (product)=>{
    // console.log("product-added",product)
    const newCart=[...cart,product];
    setCart(newCart);
    addToDb(product.key,1)
   }

    return (
        <div className='shop-container'>
            <div className="product-container">
              
                {

                    products.map(pd => <Product showAddToCart={true}
                        handleAddProduct={handleAddProduct}
                        product={pd}
                        ></Product>)
                }
                

            </div>


            <div className="cart-container">
                <Summary cart={cart}></Summary>

            </div>
            
            
        </div>
    );
};

export default Shop;
