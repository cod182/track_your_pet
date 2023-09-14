'use client';
import { petScanHistory } from '@/types';
import Link from 'next/link';
import React, { useState } from 'react';

const ScanHistoryItem = ({
  dateTime,
  coordinates,
  message,
  scannerName,
}: petScanHistory) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`w-full min-h-[50px] overflow-hidden bg-primary hover:bg-primaryLight cursor-pointer rounded-md flex flex-row justify-start items-center px-2 mt-2 shadow-xl `}
        onClick={() => {
          setOpen(open ? false : true);
        }}
      >
        <p className="font-semibold">
          Scanned:&nbsp;
          <span className="font-normal">{dateTime}</span>
        </p>
      </div>
      <div
        className={`${
          open
            ? 'min-h-[100px] max-h-[800px] h-fit py-4 border-b-2'
            : 'h-[0px] min-h-[0px] max-h-[0px] '
        }  bg-gray-200 border-black  border-l-2 border-r-2 overflow-hidden rounded-b-md w-[90%] transition-all duration-400 ease-in shadow-inner px-4`}
      >
        <div className="w-full h-fit flex flex-row flex-wrap justify-start items-center my-2">
          <p className="font-semibold">Pet Finder:&nbsp;</p>
          <p>{scannerName ? scannerName : 'N/A'}</p>
        </div>
        <hr className="w-full" />

        <div className="w-full h-fit flex flex-row flex-wrap justify-start items-center my-2">
          <p className="font-semibold">Message:&nbsp;</p>
          <p>{message ? message : 'N/A'}</p>
        </div>
        <hr className="w-full" />

        <div className="w-full h-fit flex flex-row flex-wrap justify-start items-center my-2">
          <p className="font-semibold">Location:&nbsp;</p>
          <Link
            href={`https://www.google.com/maps/place/${coordinates!.lat},${
              coordinates!.lng
            }`}
            target="_blank"
            rel="noopener"
            className="hover:text-primary hover:underline underline"
          >
            {coordinates!.lat != ''
              ? `${coordinates!.lat}, ${coordinates!.lat}`
              : 'N/A'}
          </Link>
        </div>
        <hr className="w-full" />
      </div>
    </>
  );
};

export default ScanHistoryItem;
