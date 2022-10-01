import React, { useState } from 'react';
import Link from '../link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
   const [open, setOpen] = useState(false);


   const routes = [
      { id: 1, name: 'Home', path: '/home' },
      { id: 2, name: 'Product', path: '/products' },
      { id: 3, name: 'Order', path: '/order' },
      { id: 4, name: 'Contact', path: '/contact' },
      { id: 5, name: 'About', path: '/about' },
      { id: 6, name: 'FAQ', path: '/faq' }
   ];

   return (
      <nav className="bg-cyan-500 py-2">
         <div onClick={() => setOpen(!open)} className="ml-3 h-6 w-6 text-white md:hidden">
            {
               open ?
                  <XMarkIcon/> : <Bars3Icon/>
            }
         </div>


         {/* <span>{open ? 'open' : 'close'}</span> */}

         <ul className={`md:flex w-full justify-center py-4 absolute md:static duration-200 ease-linear bg-sky-300 ${open ? 'top-10' : 'top-[-340px]'}`}>
            {
               routes.map(route => <Link key={route.id} route={route}></Link>)
            }
         </ul>
      </nav>
   );
};

export default NavBar;