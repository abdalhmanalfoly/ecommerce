'use client';
import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';
import { UserButton, useUser } from '@clerk/nextjs';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../_context/CartContext';
import cartApi from '../_Uitels/cartApis'
import Cart from './Cart'

function Header() {
  const { user } = useUser();

  const [openCart,setOpenCart] = useState(false);
  const [alart, setalart] = useState(false);

  const { cart, setCart } = useContext(CartContext); 
  const [isLogged, setLogged] = useState(false);
  const getcarditems = ()=>{
    cartApi.getusercartitem(user.primaryEmailAddress.emailAddress).then(res=>{
    
      res.data.data.forEach(citem=>{
      setCart((oldcart)=>[
        ...oldcart,
        {
          id:citem.id,
          product:citem.products
        }
      ])
    })



    })
  }
  useEffect(()=>{
    user&&getcarditems()
  },[user])
  useEffect(() => {
    setLogged(window.location.href.toString().includes('sign-in'));
  }, []);


  const handleClick = () => {
    setalart((prevAlart) => !prevAlart); // عكس القيمة الحالية
    console.log("Alert value:", alart); // قد لا يعكس القيمة الجديدة مباشرة
  };
  return (
    !isLogged && (
      <header className="bg-white">
        <div className="mx-auto sticky top-0 z-50 px-4 sm:px-6 lg:px-8 shadow-md">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Image src={'/logo.svg'} priority alt="logo" width={90} height={80} />
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                      Explore
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-500 transition hover:text-gray-500/75" href="#">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md hover:bg-slate-700 bg-primary px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="/sign-in"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/sign-in";
                    }}
                  > 
                    Login
                  </a>
                </div>
              ) : (
                <div className="flex gap-6 cursor-pointer">
                  <span className="flex gap-1">
                    <ShoppingCart onClick={()=>setOpenCart(!openCart)} className='size-[30px]' /> <span className='px-[7px] rounded-3xl bg-primary text-gray-50 h-[30px] flex justify-center items-center '>{cart?.length }</span>
                  </span>
                  <UserButton />
                  {openCart && <Cart /> }
                  
                </div>
              )}

              <div className="block md:hidden">
                <button onClick={handleClick} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  
                </button>
                {alart && (
        <div className="">
        </div>
      )}
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
}

export default Header;
