import React from 'react'
import QueryFunction from '../../utils/queryFuction'
export default function FeaturedCard() {
 return(
   <div className='  h-full  w-full   mt-4'>
     <QueryFunction value={true} ky="isFeatured" />
   </div>
 )
}

