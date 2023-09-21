import { BsLink45Deg } from 'react-icons/bs';
import { TitleComp } from '@/components';
import { attributions } from '@constants/attributions';
import Link from 'next/link';

declare interface attributionProps {
  title: String;
  link: string;
  credit?: string;
}

const page = () => {
  return (
    <div className="px-2">
      <TitleComp
        title="Attribution"
        position="start"
        size="calc(20px + 2.5vmin)"
        extraTextCss="text-transparent bg-clip-text bg-gradient-to-br from-primary to-cyan-400 font-semibold"
      />
      {/* Attributions map */}
      <ul className="w-full h-fit">
        {attributions.map(({ title, credit, link }: attributionProps) => {
          return (
            <li className="flex flex-row items-center my-2 text-xl">
              <BsLink45Deg className="inline" />
              <Link
                href={link}
                target="_blank"
                rel="noopener"
                className="hover:text-primary"
              >
                <p className="font-semibold text-lg w-fit inline">{title}</p>
                {credit && (
                  <span className="w-fit inline capitalize text-gray-500 text-sm">
                    &nbsp;- {credit}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default page;
