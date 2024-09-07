import Link from 'next/link'
import React from 'react'

function Inventory() {
  return (
    <Link href={"/inventory"} className="flex justify-center p-1 text-white border-2">Inventory</Link>
  )
}

export default Inventory