import Link from 'next/link'
import React from 'react'

function Pharmacy() {
  return (
    <Link href={"/pharmacy"} className="flex justify-center p-1 text-white border-2">Pharmacy</Link>
  )
}

export default Pharmacy