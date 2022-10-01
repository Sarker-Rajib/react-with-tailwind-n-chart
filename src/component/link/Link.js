import React from 'react';

const Link = ({route}) => {
   return ( 
      <li className="mx-3 mb-5 md:mb-0">
         <a className="bg-orange-600 text-white py-2 px-3 rounded-lg" href={route.path}>{route.name}</a>
      </li>
   );
};

export default Link;