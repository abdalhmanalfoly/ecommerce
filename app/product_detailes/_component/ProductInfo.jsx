'use client'
import React, { useContext } from 'react'
import { AlertOctagon, BadgeCheck, List, ShoppingCart } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import cartApis from '/app/_Uitels/cartApis'; 
import { CartContext } from '../../_context/CartContext';
function ProductInfo({product}) {
  const {cart,setCart}=useContext(CartContext)
    if (!product) return <div>Loading...</div>; 
    const {user} = useUser()
      const handeltocart = ()=>{
        if(!user){
          window.location.href = '/sign-in';
        }else{
          const data = {
            data: {
              userName:user.fullName,
              email:user.primaryEmailAddress.emailAddress,
              products:[product.documentId],
            }
          }
          cartApis.addTocart(data).then(res=>{
            setCart(oldcart=>[
              ...oldcart,
              {
                id:res.data.di,
                product
              }
            ])
          }).catch(error=>{
            console.log(error)
          })
      }
      }
  return (
    <div>
      <h2 className='text-[25px]'>{product.title}</h2>
      <h2 className='text-[16px] mt-3 gap-2  flex text-gray-600'> <List /> {product.category}</h2>
      <h2 className='text-[18px] text-gray-800 mt-3'>{product.description}</h2>
      <h2 className='text-gray-800 flex gap-1 items-center mt-2' >{product.instantDelivery ? <BadgeCheck className='text-green-900 w-5'/> : <AlertOctagon className='w-5 text-red-800'/>}Available for delivery</h2>
      <h2 className=' text-[32px] text-primary mt-6  '>{product.price}$</h2>
      <button onClick={()=>handeltocart()} className=' mt-4 flex gap-1 bg-primary rounded-lg text-white p-2 hover:bg-gray-700' ><ShoppingCart/>Add To Cart</button>
    </div>
  )
}

export default ProductInfo
