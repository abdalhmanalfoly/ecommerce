import React from 'react'
import Image from 'next/image'
import { List } from 'lucide-react';
import Link from 'next/link';

function ProductItem({product}) {
    function capitalizeFirstLetter(text) {
        if (!text) return '';
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
      
      
      
  return (
    <div className='"hover:cursor-pointer rounded-lg border-gray-300 hover:scale-105 transition duration-300 ease-in-out p-1 hover:shadow-2xl"'>
          <Link
    href={`/product_detailes/${product.documentId}`}
  >
    <Image
      src={product.imgUrl}
      alt="img"
      width={400}
      height={350}
      className="transform hover:rotate-3 hover:scale-95 transition duration-300 ease-in-out rounded-t-lg h-[170px] object-cover"
    />
    <div className="flex shadow-md items-center justify-between p-3 bg-gray-200 rounded-b-lg">
      <div className="items-center">
        <div className="line-clamp-1 text-[15px] text-primary font-roboto font-medium">
          {capitalizeFirstLetter(product.title)}
        </div>
        <div className="text-12 text-gray-500 flex gap-1 items-center">
          <List className="w-[40px] h-[19px]" />
          {product.category}
        </div>
      </div>
      <div className="text-gray-950 rounded-md bg-slate-300 p-1 hover:border">
        {product.price}$
      </div>
    </div>
  </Link>
    </div>

  
  )
}

export default ProductItem
