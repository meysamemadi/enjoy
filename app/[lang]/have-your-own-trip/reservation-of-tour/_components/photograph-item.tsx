import { X } from 'lucide-react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export const PhotographItem = ({id , fullname , avatar}: any) => {



    const router = useRouter()
    const searchParams = useSearchParams();
  
  // Get the current photographers from the URL
  const photographers = searchParams.get('photographers');
  const photographersArray = photographers ? photographers.split(',') : [];


    // Function to remove a photographer ID from the URL
    const removePhotographer = (idToRemove: number) => {
        const updatedPhotographers = photographersArray.filter((id) => id !== idToRemove.toString());
    
        // Build the new query string without the removed photographer
        const newSearchParams = new URLSearchParams(searchParams);
        if (updatedPhotographers.length > 0) {
          newSearchParams.set('photographers', updatedPhotographers.join(','));
        } else {
          newSearchParams.delete('photographers'); // Remove the param if empty
        }
    
        // Push the new URL without refreshing the page
        router.push(`?${newSearchParams.toString()}`);
      };


  return (
    <div className=' bg-[#F8F3EF] border-[rgba(169,141,105,0.50)] p-2 flex items-center justify-between'>
        <Image src={avatar} width={48} height={48} alt='' />
        <div className='flex text-sm font-bold capitalize text-[#594636] px-2'>
            {fullname}

            
        </div>
        <X onClick={() => removePhotographer(id)} className='size-4 cursor-pointer hover:text-rose-500' />
    </div>
  )
}
