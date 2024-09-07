import Link from 'next/link'
import React from 'react'

function Appointment() {
  return (
    <Link href={"/appointment"} className="flex justify-center p-1 text-white border-2">Appointment</Link>
  )
}

export default Appointment