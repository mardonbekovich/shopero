import React from 'react';
import { useParams } from 'react-router-dom';
import ProductWrap from '../../components/ProductWrap/ProductWrap';

import Products from '/public/products.json';


const Product = () => {
  
  const { id } = useParams();
  
  const product = Products.find((item) => item.id === Number(id));
  return (
    <>
      <ProductWrap product={product} />
    </>
  );
};

export default Product;
