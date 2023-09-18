'use client';
import { signOut, useSession } from 'next-auth/react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '@public/assets/logo.png';
import MobileNav from '../MobileNav/MobileNav';

const Nav = () => {
  const { status } = useSession();

  return (
    <>
      <MobileNav status={status} signOut={signOut} />

      <div className="hidden sm:flex">
        <nav className="h-auto w-full flex justify-between p-5 relative">
          <div className="w-[50vw] flex-start my-auto">
            <Link href="/" className="w-[100px] h-[100px] drop-shadow-2xl">
              <Image
                src={logo}
                alt="Codie's Logo"
                width={100}
                height={100}
                className="logo"
              />
            </Link>
          </div>

          <div className="w-[50vw] flex flex-row items-center justify-end">
            {/* Navigation */}
            <ul className="flex flex-row justify-end items-center nav-list my-1">
              <li className="text-secondary select-none">|</li>

              {status === 'authenticated' ? (
                <>
                  <li className="mx-2">
                    <Link
                      href="/my-account"
                      className="drop-shadow-xl transition-all ease-in-out duration-300 hover:drop-shadow-2xl hover:text-secondary"
                    >
                      My Account
                    </Link>
                  </li>

                  <li className="text-secondary select-none">|</li>

                  <li className="mx-2">
                    <button
                      className="drop-shadow-xl transition-all ease-in-out duration-300 hover:drop-shadow-2xl hover:text-secondary"
                      type="button"
                      onClick={() => void signOut()}
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li className="mx-2">
                  <Link
                    className="drop-shadow-xl transition-all ease-in-out duration-300 hover:drop-shadow-2xl hover:text-secondary"
                    href="/login"
                  >
                    Sign In / Sign Up
                  </Link>
                </li>
              )}

              <li className="text-secondary select-none">|</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
