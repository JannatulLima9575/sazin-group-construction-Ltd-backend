import React from 'react'
import QueryFunction from '../../utils/queryFuction'
export default function AllCard() {
 return(
   <div className='  h-full  w-full   mt-4'>
     <QueryFunction value="all" ky="category" />
   </div>
 )
}

