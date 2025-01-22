import React from 'react'

function Sceleton() {
  return (
<div className="grid pr-10 lg:grid-cols-3 grid-cols-1 gap-44 lg:gap-40">
  <div className="h-[300px] w-[400px] rounded-lg bg-gray-200"></div>

  <div className="hidden lg:block"></div>

  <div className="space-y-5">
    <div className="h-[30px] w-[300px] px-5 rounded-lg bg-gray-200"></div>
    <div className="h-[30px] w-[70px] px-5 rounded-lg bg-gray-200"></div>
    <div className="h-[30px] w-[400px] px-5 rounded-lg bg-gray-200"></div>
    <div className="h-[30px] w-[400px] px-5 rounded-lg bg-gray-200"></div>
    <div className="h-[30px] w-[400px] px-5 rounded-lg bg-gray-200"></div>
    <div className="h-[30px] w-[400px] px-5 rounded-lg bg-gray-200"></div>
    <div className="h-[30px] w-[100px] px-5 rounded-lg bg-gray-200"></div>
    <div className="h-[30px] w-[210px] px-5 rounded-lg bg-gray-200"></div>
    <div className="h-[30px] w-[40px] px-5 rounded-lg bg-gray-200"></div>
    <div className="h-[30px] w-[150px] px-5 rounded-lg bg-gray-200"></div>
  </div>
</div>


  )
}

export default Sceleton
