'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const UserNav = () => {
  const currenPage = usePathname();

  return (
    <ul className="flex flex-row flex-wrap justify-center items-center h-fit">
      <li className="mx-2 text-secondary">|</li>

      <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
        <Link href="/my-account">
          <span
            className={`${
              currenPage === '/my-account'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400'
                : ''
            } font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg`}
          >
            Home
          </span>
        </Link>
      </li>
      <li className="mx-2 text-secondary">|</li>

      <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
        <Link href="/my-account/pets">
          <span
            className={`${
              currenPage === '/my-account/pets'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400'
                : ''
            } font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg`}
          >
            Pets
          </span>
        </Link>
      </li>

      <li className="mx-2 text-secondary">|</li>

      <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
        <Link href="/my-account/info">
          <span
            className={`${
              currenPage === '/my-account/info'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400'
                : ''
            } font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg`}
          >
            {' '}
            Info
          </span>
        </Link>
      </li>
      <li className="mx-2 text-secondary">|</li>
      <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
        <Link href="/my-account/settings">
          <span
            className={`${
              currenPage === '/my-account/settings'
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400'
                : ''
            } font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg`}
          >
            {' '}
            Settings
          </span>
        </Link>
      </li>
      <li className="mx-2 text-secondary">|</li>
    </ul>
  );
};

export default UserNav;
