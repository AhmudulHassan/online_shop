import "./Product.css"
import React from 'react';
import {Link} from 'react-router-dom'


const Product = (props) => {
    console.log(props.product);
    const {img,name,seller,price,stock,key}=props.product;
    return (
        <div className='product'>

            <div>
                <img src={props.product.img} alt="" srcset="" />

            </div>
            <div className='product-name'>
                <h4><Link to={"/product/"+key}>{name}</Link></h4>
                
                
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p><small>Only <b>{stock}</b> available</small></p>
                {props.showAddToCart===true && <button 
                    className='main-button' 
                    onClick={()=> props.handleAddProduct(props.product)}>add to cart</button>
                }
               
            </div>
        </div>
    );
};

export default Product;