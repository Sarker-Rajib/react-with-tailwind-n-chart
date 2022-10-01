import React from 'react';
import PriceOption from '../priceOption/PriceOption';

const Pricing = () => {
   const pricingOption = [
      {
         id: 1, name: 'Silver', price: 9, feature: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai Feature',
            'Ajaira Feature'
         ]
      },
      {
         id: 2, name: 'Gold', price: 49, feature: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai Feature',
            'Ajaira Feature'
         ]
      },
      {
         id: 3, name: 'Premium', price: 99, feature: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'Hudai Feature',
            'Ajaira Feature'
         ]
      }
   ]

   return (
      <div>
         <h2 className="text-5xl bg-indigo-300 py-2 text-white">Best Deal of the Town</h2>
         <div className="grid md:grid-cols-3 gap-3">
            {
               pricingOption.map(option => <PriceOption
                  key={option.id}
                  option={option}
               >
               </PriceOption>)
            }
         </div>
      </div>
   );
};

export default Pricing;