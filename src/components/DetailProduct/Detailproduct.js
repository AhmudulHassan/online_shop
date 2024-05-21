import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products';
import Product from '../Product/Product';

const Detailproduct = () => {
    const {productKey}= useParams()
    const product=fakeData.find(pd => pd.key===productKey);
    // console.log(product);

    return (
        <div>
            <h4>{productKey} Details coming soon</h4>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default Detailproduct;