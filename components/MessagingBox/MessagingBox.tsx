'use client';
import { SelectSlider } from '@/components';
import { useState } from 'react';

const MessagingBox = () => {
  const [locationAllowed, setLocationAllowed] = useState(false);
  console.log(locationAllowed);
  return (
    <form className="w-full max-w-[600px] h-fit p-5 flex flex-col justify-center items-center">
      <input
        className="w-full mx-4 my-2 border-black border-[1px] bg-gray-300 text-black px-4 py-2"
        placeholder="Your Name"
        type="text"
        name="name"
        id="name"
      />
      <input
        className="w-full mx-4 my-2 border-black border-[1px] bg-gray-300 text-black px-4 py-2"
        placeholder="Your Message"
        type="text"
        name="message"
        id="message"
      />
      <div className="flex flex-row justify-center items-center flex-wrap my-2">
        <p>Location Access:&nbsp;</p>
        <SelectSlider
          rightSelect="OFF"
          leftSelect="ON"
          setReturnState={setLocationAllowed}
        />
      </div>
      <button
        type="submit"
        className="w-fit h-fit px-4 py-2 bg-primary hover:bg-primaryLight rounded-lg text-white hover:text-black shadow-xl hover:shadow-inner"
      >
        Send Message
      </button>
    </form>
  );
};

export default MessagingBox;
