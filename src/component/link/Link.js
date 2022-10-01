import React from 'react';

const Link = ({route}) => {
   return ( 
      <li className="mx-3 mb-5">
         <a className="bg-yellow-600 text-white py-2 px-3 rounded-lg" href={route.path}>{route.name}</a>
      </li>
   );
};

export default Link;