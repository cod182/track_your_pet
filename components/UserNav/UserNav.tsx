import Link from 'next/link';

const UserNav = () => {
  return (
    <ul className="flex flex-row flex-wrap justify-center items-center h-fit">
      <li className="mx-2 text-secondary">|</li>

      <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
        <Link href="/my-account/home">
          <span className="font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg">
            Home
          </span>
        </Link>
      </li>
      <li className="mx-2 text-secondary">|</li>

      <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
        <Link href="/my-account/pets">
          <span className="font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg">
            Pets
          </span>
        </Link>
      </li>
      <li className="mx-2 text-secondary">|</li>
      <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
        <Link href="/my-account/info">
          <span className="font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg">
            Info
          </span>
        </Link>
      </li>
      <li className="mx-2 text-secondary">|</li>
      <li className="transition-all ease-in duration-300 py-1 px-4 rounded">
        <Link href="/my-account/settings">
          <span className="font-normal text-lg hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-cyan-400 hover:drop-shadow-lg">
            Settings
          </span>
        </Link>
      </li>
      <li className="mx-2 text-secondary">|</li>
    </ul>
  );
};

export default UserNav;
