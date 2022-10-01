import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
   const { feature } = option;

   return (
      <div className="bg-purple-600 m-3 p-4 rounded">
         <div>
            <h3>
               <span className="text-4xl text-white font-bold">{option.price}$</span>
               <span className="text-white">/month</span>
            </h3>
            <p className="text-cyan-50 text-2xl">{option.name}</p>
         </div>

         {
            feature.map((feature, idx) => <Feature
               key={idx}
               feature={feature}></Feature>)
         }

         <button className="bg-green-600 p-2 rounded-md w-full font-bold mt-8 text-white">Buy Now</button>
      </div>
   );
};

export default PriceOption;