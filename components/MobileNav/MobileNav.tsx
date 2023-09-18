'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Divide as Hamburger } from 'hamburger-react';

import logo from '../../public/assets/logo.png';

const MobileNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className="h-auto w-full flex justify-between p-5 sm:hidden">
      <div className="w-[50vw] flex-start my-auto">
        <a href="/" className="w-fit h-fit overflow-hidden drop-shadow-2xl">
          <Image
            src={logo}
            alt="Codie's Logo"
            height={100}
            width={100}
            className="logo"
          />
        </a>
      </div>
      <div className="w-full flex flex-end flex-col items-end justify-center hover:text-secondary">
        <Hamburger
          label="show menu"
          toggle={handleMobileMenu}
          toggled={mobileMenu}
        />
      </div>

      <div
        className={`w-full bg-gray-200 transition-all ease-in-out duration-500 fixed left-0 top-0 overflow-hidden z-[999] ${
          mobileMenu ? 'h-screen' : 'h-0'
        }`}
      >
        <div className="h-auto p-6 w-full flex justify-end items-center">
          <button
            className="text-[50px] hover:text-secondary transition-all ease-in-out duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleMobileMenu();
            }}
          >
            <Hamburger
              label="hide menu"
              toggle={handleMobileMenu}
              toggled={mobileMenu}
            />
          </button>
        </div>
        <div className="flex flex-col justify-between items-center px-5">
          <button
            className="text-[50px] hover:text-secondary transition-all ease-in-out duration-300 hover:shadow-2xl w-full text-center rounded-md"
            onClick={() => {
              handleMobileMenu();
              document!
                .getElementById('about')!
                .scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ABOUT
          </button>
        </div>

        <div className="flex flex-col justify-between items-center px-5">
          <button
            className="text-[50px] hover:text-secondary transition-all ease-in-out duration-300 hover:shadow-2xl w-full text-center rounded-md"
            onClick={() => {
              handleMobileMenu();
              document!
                .getElementById('about')!
                .scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ABOUT
          </button>
        </div>

        <a
          href="/"
          className="transition-all ease-in-out duration-300 hover:bg-slate-600 w-full text-center rounded-full"
          onClick={(e) => {
            handleMobileMenu();
          }}
        >
          <Image
            src={logo}
            alt="Home"
            className="max-h-[120px] w-auto mx-auto"
          />
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
