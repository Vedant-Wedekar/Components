import WrapButton from '@/components/ui/wrap-button'
import React from 'react'
import { Bike } from 'lucide-react';

const page = () => {
  return (
    <div>
    <WrapButton >
       <Bike className='animate-spin' />
    </WrapButton>
    </div>
  )
}

export default page