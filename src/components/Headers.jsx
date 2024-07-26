import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Headers = () => {
  return (
    <div className='py-3 px-10 sm:px-4 md:px-6 lg:px-6 bg-neon-dark'>
        <div className='container mx-auto py-[16vh]'>
            <div className='grid grid-cols-1 relative lg:grid-cols-2 gap-8 items-center'>
              <div className='lg:w-[32rem] w-full flex flex-col space-y-6'>
                <div className="text-4xl md:text-5xl font-bold text-[#2e2e2e] lg:text-6xl">
                    Fast Food <span className='text-[#f54748]'> de  
                    </span> Comer bien   <span className='text-[#f54748]'>nunca </span><span className='text-[#fdc55e]'>  fue tan fácil!</span>
                </div>
                <div className='lg:text-xl text-[#191919] md:text-lg text-base'>
                    FastBite es una innovadora aplicación de pedidos de comida rápida diseñada para brindarte una experiencia gastronómica rápida, conveniente y deliciosa. Nuestra plataforma conecta a los usuarios con una amplia variedad de restaurantes locales y cadenas de comida rápida, permitiéndoles ordenar sus platos favoritos con solo unos toques en su teléfono
                </div>
                <div className='flex rounded-full py-2 px-4 justify-between items-center bg-white shadow-md'>
                    <div className='flex items-center'>
                        <FaSearch size={22} className='cursor-pointer' />
                        <input type="text" className='text-black w-full border-none outline-none py-2 px-4' placeholder='Buscar comida' />
                    </div>
                    <div className='h-10 w-10 relative bg-orange-500 rounded-full'>
                        <FaSearch size={15} className='cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Headers