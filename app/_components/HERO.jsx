import React from 'react'

function HERO() {
  return (
    <>
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen ">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold text-black sm:text-5xl">
      Your Gateway to Learning.
      <strong className="font-extrabold text-primary sm:block"> Increase Conversion. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Welcome to our eCommerce platform, your ultimate destination for digital courses. Explore a wide variety of topics designed to enhance your skills, grow your knowledge, and achieve your personal or professional goals from the comfort of your home.

      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-primary-600 shadow hover:text-gray-700 focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default HERO
