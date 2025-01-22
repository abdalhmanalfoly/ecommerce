import React from 'react'
import ProductItem from './ProductCurd';

function Productslist({productlist}) {
    const sortedProducts = productlist.sort((a, b) => a.idProduct - b.idProduct);
  return (
    <div className='grid grid-cols-1 custom-grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {sortedProducts.map(item=>(
                <div key={item.idProduct}>
                    <ProductItem key={item.idProduct} product={item}/>
                </div>
              ))}  
    </div>
  )
}

export default Productslist
