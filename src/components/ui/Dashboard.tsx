import Link from 'next/link'
import React from 'react'

function Dashboard() {
  return (
    <Link href={"/dashboard"} className='flex justify-center p-1 text-white border-2'>Dashboard</Link>
  )
}

export default Dashboard