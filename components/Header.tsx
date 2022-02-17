import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between p-3 shadow-md">
      <div className=" ml-32">
        <Link href="/">
          <img
            className=" w-24 cursor-pointer object-contain"
            src="/images/g53.png"
            alt="Logo"
          />
        </Link>
      </div>
      <div className=" flex gap-10 mr-32">
        <h3>Sobre</h3>
        <h3>Posts</h3>
      </div>
    </header>
  )
}

export default Header
