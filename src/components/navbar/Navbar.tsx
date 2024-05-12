import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  return (
    <>
     <div className='w-full bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmacia</Link>

            <div className='flex gap-4'>
             {/* <div className='hover:underline'>Produto</div>
              <Link to='/categorias' className='hover:underline'>Categoria</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>*/}
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar