import Image from 'next/image';
import Link from 'next/link';
import { MobileNav } from '@components/index';

const Nav = () => {
  return (
    <>
      <MobileNav setModalState={setQuoteModal} />
      <div className="w-screen h-[100px] bg-white shadow-xl flex flex-row justify-around items-center px-4">
        <div className="border-full overflow-hidden h-full w-[50%] flex flex-row justify-start items-center">
          <Image
            src={'/assets/logo.png'}
            alt="logo"
            width={200}
            height={200}
            className="w-auto h-full"
          />
        </div>
        <div className="w-[50%] h-full flex flex-row justify-end items-center">
          <Link href="/">Sign In</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
