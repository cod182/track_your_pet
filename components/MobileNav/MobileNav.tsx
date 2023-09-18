'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Divide as Hamburger } from 'hamburger-react';

import logo from '../../public/assets/logo.png';

const MobileNav = ({ status, signOut }: any) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className="h-auto w-full flex justify-between items-center p-5 sm:hidden">
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
        <div className="h-[120px] p-6 w-full flex flex-col justify-end items-end">
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
          <a
            href="/"
            className="text-[50px] hover:text-primary transition-all ease-in-out duration-300 w-full text-center rounded-md my-2"
          >
            Home
          </a>
        </div>
        {status === 'authenticated' ? (
          <div className="flex flex-col justify-between items-center px-5">
            <Link
              href="/my-account"
              className="text-[50px] hover:text-primary transition-all ease-in-out duration-300 w-full text-center rounded-md my-2"
              onClick={() => {
                handleMobileMenu();
              }}
            >
              My Account
            </Link>
            <Link
              href="/my-account/pets"
              className="text-[30px] text-gray-500 hover:text-primaryLight transition-all ease-in-out duration-300 w-full text-center rounded-md"
              onClick={() => {
                handleMobileMenu();
              }}
            >
              - Pets
            </Link>
            <button
              className="text-[50px] hover:text-primary transition-all ease-in-out duration-300 w-full text-center rounded-md my-2"
              type="button"
              onClick={() => void signOut()}
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-between items-center px-5">
            <Link
              className="text-[50px] hover:text-secondary transition-all ease-in-out duration-300 w-full text-center rounded-md my-2"
              href="/login"
              onClick={() => {
                handleMobileMenu();
              }}
            >
              Sign In / Sign Up
            </Link>
          </div>
        )}
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
