import React from 'react';
import Image from 'next/image';

function ProductPanale({ product }) {
  if (!product) return <div>Loading...</div>; 

  return (
    <div>
      <Image className='rounded-xl lg:ml-28 w-[450px] h-[300px]' src={product.imgUrl} alt="img" width={400} height={400} />
    </div>
  );
}

export default ProductPanale;
