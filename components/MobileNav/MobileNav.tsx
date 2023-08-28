'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Divide as Hamburger } from 'hamburger-react';
import { BsFileText } from 'react-icons/bs';

import logo from '../../../public/assets/images/logo.webp';
import linkedIn from '../../../public/assets/icons/linkedin.png';
import gitHub from '../../../public/assets/icons/github.png';

const MobileNav = (setModalState: any) => {
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
      <div className="w-full flex flex-end flex-col items-end justify-center">
        <Hamburger
          label="show menu"
          toggle={handleMobileMenu}
          toggled={mobileMenu}
          color="orange"
        />
      </div>

      <div
        className={`w-full bg-slate-600 transition-all ease-in-out duration-500 fixed left-0 top-0 overflow-hidden z-[999] ${
          mobileMenu ? 'h-screen' : 'h-0'
        }`}
      >
        <div className="h-auto p-6 w-full flex justify-end items-center">
          <button
            className="text-[50px] hover:text-[#49e940] transition-all ease-in-out duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleMobileMenu();
            }}
          >
            <Hamburger
              label="hide menu"
              toggle={handleMobileMenu}
              toggled={mobileMenu}
              color="orange"
            />{' '}
          </button>
        </div>
        <div className="flex flex-col justify-between items-center px-5">
          <button
            className="text-[50px] py-5 text-orange-400 transition-all ease-in-out duration-300 hover:bg-slate-500 hover:shadow-inner w-full text-center rounded-full"
            onClick={() => {
              handleMobileMenu();
              document!
                .getElementById('about')!
                .scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ABOUT
          </button>
          <button
            className="text-[50px] py-5 text-orange-400 transition-all ease-in-out duration-300 hover:bg-slate-500 hover:shadow-inner w-full text-center rounded-full"
            onClick={() => {
              handleMobileMenu();
              document!
                .getElementById('projects')!
                .scrollIntoView({ behavior: 'smooth' });
            }}
          >
            PROJECTS
          </button>
          <button
            onClick={() => {
              handleMobileMenu();
              document!
                .getElementById('contact')!
                .scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-[50px] py-5 text-orange-400 transition-all ease-in-out duration-300 hover:bg-slate-500 hover:shadow-inner w-full text-center rounded-full"
          >
            CONTACT
          </button>
          <button
            onClick={() => {
              handleMobileMenu();
              setModalState((prev: boolean) => !prev);
            }}
            className="text-[50px] py-5 text-orange-400 transition-all ease-in-out duration-300 hover:bg-slate-500 hover:shadow-inner w-full text-center rounded-full"
          >
            QUOTE
          </button>
        </div>
        <div className="flex flex-row justify-center items-center my-5">
          <Link
            className="mx-4 transition-all ease-in-out duration-500 hover:shadow-inner hover:bg-slate-500 rounded-full p-4"
            href="https://linked.in/codiestephensevans"
            target="_blank"
            rel="noopener"
          >
            <Image
              width={80}
              height={80}
              src={linkedIn}
              alt="LinkedIn"
              className="drop-shadow-xl"
            />
          </Link>
          <Link
            className="mx-4 transition-all ease-in-out duration-500 hover:shadow-inner hover:bg-slate-500 rounded-full p-4"
            href="https://github.com/cod182/"
            target="_blank"
            rel="noopener"
          >
            <Image
              width={80}
              height={80}
              src={gitHub}
              alt="GitHub"
              className="drop-shadow-xl"
            />
          </Link>

          {/* <Link
            className="flex just items-center mx-4 transition-all ease-in-out duration-500 hover:shadow-inner hover:bg-slate-500 rounded-full p-4"
            download="Codie_Stephens-Evans_CV.pdf"
            href="/Codie_Stephens-Evans_CV.pdf"
          >
            <BsFileText
              title="Download My Cv"
              color="#8783fe"
              className="h-[50px] w-auto my-[15px] mx-[15px]"
            />
          </Link> */}
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
