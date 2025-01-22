import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Breadcraump from '../_components/Breadcraumb';

function Page() {
  const path = '/sucssec payment'
  return (
    <div>
      <Breadcraump path={path}/>
    <div className='flex flex-col items-center justify-center px-6 mt-4'>

      <Image 
        src='/sucssce.png' 
        alt='Success Icon' 
        width={160} 
        height={160} 
      />
      <h2 className='text-[24px] font-semibold'>Payment Successful!</h2>
      <h2 className='text-[17px] text-center mt-6 text-gray-500'>
        We sent an email with your order confirmation along with digital content.
      </h2>
      <Link 
        href='/'
        className='p-2 mt-6 text-white rounded-lg bg-primary hover:bg-primary-dark'
      >
        Go To Home
      </Link>
    </div>
    </div>
  );
}

export default Page;
