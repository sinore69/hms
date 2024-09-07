import Link from 'next/link'
import React from 'react'

function Department() {
  return (
    <Link href={"/department"} className='flex justify-center p-1 text-white border-2'>Department</Link>
  )
}

export default Department