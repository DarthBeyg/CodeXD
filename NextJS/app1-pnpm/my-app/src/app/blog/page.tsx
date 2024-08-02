import Link from 'next/link'
import React from 'react'

function blog() {
  return (
    <div className='flex gap-5 py-10'>
          <Link href={"/Blog/Blog1"}>Blog1</Link>
          <Link href={"/Blog/Blog2"}>Blog2</Link>
          <Link href={"/Blog/Blog3"}>Blog3</Link>
          <Link href={"/Blog/Blog4"}>Blog4</Link>
          <Link href={"/Blog/Blog5"}>Blog5</Link> 
    </div>
  )
}

export default blog


