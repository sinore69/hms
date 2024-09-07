import Link from 'next/link'
import React from 'react'

function Doctor() {
  return (
    <Link href={"/doctor"} className='flex justify-center p-1 text-white border-2'>Doctor</Link>
  )
}

export default Doctor