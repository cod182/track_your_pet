import Link from 'next/link';
import React from 'react';

const AddPetButton = () => {
  return (
    <Link
      href="/my-account/pets/add-pet"
      className="group aspect-square rounded-lg border-2 border-gray-200 shadow-md mx-auto max-w-[200px] w-full relative flex flex-col justify-evenly items-center p-2 bg-gradient-to-br from-primary to-cyan-400 transition-all ease-in-out duration-400  hover:scale-110	 hover:z-[99] hover:border-2 hover:border-white"
    >
      {/* Top Area */}

      <span className="text-start text-[50px] font-bold px-6 border-black border-2 rounded-full shadow-lg group-hover:bg-gradient-to-t transition-all duration-400 ease-in  from-green-400 to-cyan-500">
        +
      </span>

      <span className="text-lg sm:text-2xl font-semibold">Add A Pet</span>
    </Link>
  );
};

export default AddPetButton;
