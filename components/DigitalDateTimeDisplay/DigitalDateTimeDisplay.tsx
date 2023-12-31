'use client';
import React, { useEffect, useState } from 'react';

const DigitalDateTimeDisplay = () => {
  useEffect(() => {
    const getDateTime = (request: string) => {
      let currentdate = new Date();
      let date = currentdate.toLocaleDateString('en-gb');

      let hours =
        currentdate.getHours() === 0
          ? '0' + currentdate.getHours()
          : currentdate.getHours();
      let minutes =
        currentdate.getMinutes() <= 9
          ? '0' + currentdate.getMinutes()
          : currentdate.getMinutes();

      if (request === 'date') {
        return date.toString();
      } else if (request === 'time') {
        return hours.toString() + ':' + minutes.toString();
      }
    };

    setInterval(() => {
      let time = getDateTime('time');
      let date = getDateTime('date');
      setTime(time);
      setDate(date);
    }, 1000);
  }, []);

  const [time, setTime] = useState<string>();
  const [date, setDate] = useState<string>();

  return (
    <div className=" border-2 border-black bg-gray-200 rounded-xl p-2 mb-2 mx-auto w-full max-w-[214px] shadow-sm min-w-[148px] transition-all ease-in duration-400 overflow-hidden">
      <div className="bg-black py-2 px-4 rounded-xl w-full h-full flex flex-row sm:flex-col justify-center items-center transition-all ease-in duration-400 overflow-hidden">
        <p className="text-transparent bg-clip-text bg-gradient-to-bl from-primary to-cyan-400 text-[12px] xxs:text-sm sm:text-lg font-semibold">
          {date}
        </p>
        <span className="inline sm:hidden text-white">&nbsp;</span>

        <p className="text-transparent bg-clip-text bg-gradient-to-bl from-primary to-cyan-400 text-[12px] xxs:text-sm sm:text-lg font-semibold">
          {time}
        </p>
      </div>
    </div>
  );
};

export default DigitalDateTimeDisplay;
