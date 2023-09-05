import Image from 'next/image';

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="grid justify-center items-center grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {/* PetSquare */}
        <section className="aspect-square rounded-lg border-2 border-gray-200 shadow-md mx-auto max-w-[250px] w-full relative flex flex-col justify-evenly items-center p-2 bg-gradient-to-tl from-primary to-cyan-400">
          {/* Top Area */}
          <div className="w-full flex flex-row justify-evenly items-center max-h-[100px]">
            <div className="w-[30%] p-2 overflow-hidden  border-black border-2 rounded-full shadow-lg">
              <Image
                src="/assets/dog.png"
                alt="dog icon"
                width={100}
                height={100}
                className="object-contain "
              />
            </div>
            <div className="w-[60%] p-2 text-end ">
              <p className="w-full text-xl font-semibold overflow-x-scroll max-h-[150px]">
                {/* PET NAME */}
                Paulio
              </p>
            </div>
          </div>
          {/* Middle Area */}
          <div className="w-full mt-4 text-start font-normal">
            <span>Last Scan:&nbsp;</span>
            <span>
              {/* Scan date */}
              22/03/2023 at 18:46
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
