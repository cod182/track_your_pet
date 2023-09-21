
const Footer = () => {
  return (
    <footer className="w-full h-[50px] border-t-2 border-black">
      <ul className="flex flex-row flex-wrap justify-start items-center">
        <li className="mx-2">TrackYouPet - Educational Purposes Only</li>
        <li className="mx-2">
          <a className="underline hover:text-primary" href="/attribution">
            Attribution
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
