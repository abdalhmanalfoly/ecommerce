'use client'
import React, { useEffect, useState } from 'react'
import Productslist from './Productslist'
import productApi from '../_Uitels/productApi'

function Products() {
    const [productlist,setproductlist] = useState([])

    useEffect(()=>{
        getlatestproducts_();
    },[])
    const getlatestproducts_=()=>{
        productApi.getlatestproducts().then(res=>{
            setproductlist(res.data.data)
        })
    }
  return (
    <div className='px-10 md:px-20 '>
            <h2 className='my-4 text-[32px] text-primary'>Our Latest Proudct</h2>
      <Productslist productlist={productlist}/>
    </div>
  )
}

export default Products
