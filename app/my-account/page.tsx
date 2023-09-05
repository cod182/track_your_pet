'use client';
import { useSession } from 'next-auth/react';
import { AuthCheck, TitleComp, DigitalDateTimeDisplay } from '@/components';
import Link from 'next/link';

const page = () => {
  const session = useSession();

  console.log();
  return (
    <AuthCheck notAuthRedirectUrl="/login" notAuthRedirect>
      <div className="w-screen px-4">
        <div className="flex flex-col sm:flex-row justify-between flex-wrap px-4">
          <div className="flex flex-row w-full sm:w-[80%]">
            <TitleComp
              position="start"
              title={`Welcome ${session.data?.user?.name}!`}
              color="#38a4d1"
              size="calc(20px + 2.5vmin)"
            />
          </div>
          <div className="w-full sm:w-[20%]">
            <DigitalDateTimeDisplay />
          </div>
        </div>
        {/* Menu Bar */}
        <div className="w-full h-fit bg-gray-100 rounded px-4 py-2 shadow-md">
          <ul className="flex flex-row flex-wrap justify-center items-center h-fit">
            <li className="mx-2 text-secondary">|</li>

            <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
              <Link href="/">
                <span className="font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg">
                  Home
                </span>
              </Link>
            </li>
            <li className="mx-2 text-secondary">|</li>

            <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
              <Link href="/">
                <span className="font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg">
                  Pets
                </span>
              </Link>
            </li>
            <li className="mx-2 text-secondary">|</li>
            <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
              <Link href="/">
                <span className="font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg">
                  Info
                </span>
              </Link>
            </li>
            <li className="mx-2 text-secondary">|</li>
            <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
              <Link href="/">
                <span className="font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg">
                  Settings
                </span>
              </Link>
            </li>
            <li className="mx-2 text-secondary">|</li>
          </ul>
        </div>
        {/* Pets / Quick Add */}
      </div>
    </AuthCheck>
  );
};

export default page;
