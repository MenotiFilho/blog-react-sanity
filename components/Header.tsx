import Link from 'next/link'
import React from 'react'
import { HiMenu } from 'react-icons/hi'
import { IconContext } from 'react-icons'

function Header() {
  return (
    <header className=" shadow-md">
      <div className="mx-auto flex max-w-7xl justify-between p-5">
        <div className=" flex items-center space-x-5">
          <Link href="/">
            <img
              className=" w-24 cursor-pointer object-contain"
              src="/images/g53.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="hidden mdm:absolute mdm:z-50 mdm:block"
            aria-controls="primary-navigation"
            aria-expanded="false"
          >
            <span className="sr-only">Menu</span>
            <IconContext.Provider
              value={{
                size: '3rem',
                color: 'black',
                className: 'global-class-name',
              }}
            >
              <HiMenu />
            </IconContext.Provider>
          </button>
          <div
            id="primary-navigation"
            className=" flex gap-4 mdm:fixed mdm:inset-0 mdm:left-1/3 mdm:flex-col mdm:bg-gray-800 mdm:bg-opacity-50 mdm:py-40 mdm:px-14 mdm:text-white mdm:backdrop-blur-sm"
          >
            <h3>Sobre</h3>
            <h3>Posts</h3>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
