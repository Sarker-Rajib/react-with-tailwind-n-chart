import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
   const { feature } = option;

   return (
      <div className="bg-red-400 m-3 p-4 rounded">
         <div>
            <h3>
               <span className="text-4xl">{option.price}$</span>
               <span>/month</span>
            </h3>
            <p className="text-green-200 text-2xl">{option.name}</p>
         </div>

         {
            feature.map((feature, idx) => <Feature
               key={idx}
               feature={feature}></Feature>)
         }

         <button className="bg-green-600 p-2 rounded-md w-full font-bold mt-32 text-white">Buy Now</button>
      </div>
   );
};

export default PriceOption;