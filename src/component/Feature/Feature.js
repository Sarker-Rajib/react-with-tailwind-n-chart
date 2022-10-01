import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
   return (
      <div className="flex items-center">
      <CheckCircleIcon className="h-6 w-6 text-sky-50" />
      <p className="pl-2 text-violet-50">{feature}</p>
   </div>
   );
};

export default Feature;