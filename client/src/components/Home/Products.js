import React from 'react'
import Pizzas from './Products/Pizzas'
import GarlicBread from './Products/GarlicBread'

const Products = () => {
  return (
    <div className='w-full mt-[50px] flex flex-col gap-[50px]'>
        <Pizzas/>
        <GarlicBread/>
    </div>
  )
}

export default Products