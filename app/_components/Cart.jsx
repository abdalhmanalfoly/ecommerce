import React, { useContext } from 'react';
import { CartContext } from '../_context/CartContext';
import Link from 'next/link';

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="absolute bg-primary w-[260px] h-[300px] rounded-md shadow-2xl z-10 overflow-auto mx-10 right-10 top-14 p-5">
      {cart.map((item, index) =>{ 
        return (
        <div key={item.id || index} className="pb-4">
            
          <li className="flex items-center gap-4">
            <img
            src={item.product?.[0]?.imgUrl}
            alt=''
              className="size-6/12 rounded object-cover"
            />
            <div>
              <h3 className="text-sm text-gray-50 line-clamp-1">{item.product?.[0]?.title}</h3>

              <dl className="mt-0.5 space-y-px text-[11px] text-gray-100">
                <div className='line-clamp-1'>
                  <dt className="inline">Category : </dt>
                  <dd className="inline">{item.product?.[0]?.category}</dd>
                </div>

                <div>
                  <dt className="inline">price : </dt>
                  <dd className="inline">{item.product?.[0]?.price} $</dd>
                </div>
              </dl>
            </div>
          </li>
        </div>
      )})}

      <div className="space-y-4 text-center">
        <Link
          href={'/cart'}
          className=" block rounded-md px-5 py-3 text-sm text-gray-800 transition bg-gray-100 hover:bg-slate-400"
        >
          View my cart ({cart.length})
        </Link>
      </div>
    </div>
  );
}

export default Cart;
