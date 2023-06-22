import React from 'react'

import './filters.styles.css';

const SubscriptionBar = () => {
  return (
    <div class="flex justify-center">
   <div class="mb-3 xl:w-96">
     <div class="relative mb-4 flex w-full flex-wrap items-stretch">
       <input
         type="search"
         class="relative m-0 block w-[1%] min-w-0 flex-auto border border-solid border-base-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-base-content outline-none transition duration-300 ease-in-out"
         placeholder="Enter your email"
         aria-label="Subscription"
         aria-describedby="button-addon2" />
       <span
         class="input-group-text flex items-center bg-base-300 whitespace-nowrap border border-solid border-base-300 px-3 py-1.5 text-center text-base font-normal text-base-content "
         id="basic-addon2">
         <button className='subBtn bg-base-300 text-primary' id='subBtn'>Subscribe</button>
       </span>
     </div>
   </div>
 </div>
 
  )
};

export default SubscriptionBar