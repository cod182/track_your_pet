'use client';
import { petScanHistory } from '@/types';
import Link from 'next/link';
import React, { useState } from 'react';

import { FaLocationArrow } from 'react-icons/fa';
import { BsQrCode } from 'react-icons/bs';
import { AiTwotoneMessage } from 'react-icons/ai';
const ScanHistoryItem = ({
  _id,
  dateTime,
  coordinates,
  message,
  scannerName,
  typeOfScan,
}: petScanHistory) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={`w-full min-h-[50px] overflow-hidden ${
          typeOfScan === 'pet scan'
            ? 'bg-primary hover:bg-primaryLight'
            : 'bg-secondary hover:bg-green-500'
        }  ${
          typeOfScan === 'pet scan'
            ? coordinates
              ? 'cursor-pointer'
              : 'cursor-default'
            : 'cursor-pointer'
        } rounded-md flex flex-row justify-start items-center px-2 mt-2 shadow-xl `}
        onClick={() => {
          setOpen(
            open
              ? false
              : typeOfScan === 'pet scan'
              ? coordinates
                ? true
                : false
              : true
          );
        }}
      >
        <span className="mr-2">{coordinates && <FaLocationArrow />}</span>

        <p className="font-semibold">
          Scanned:&nbsp;
          <span className="font-normal">{dateTime}</span>
          &nbsp;-&nbsp;
          <span className="capitalize">{typeOfScan}</span>
        </p>
        <span className="ml-2">
          {typeOfScan === 'pet scan' ? <BsQrCode /> : <AiTwotoneMessage />}
        </span>
      </div>
      <div
        className={`${
          open
            ? 'min-h-[100px] max-h-[800px] h-fit py-4 border-b-2'
            : 'h-[0px] min-h-[0px] max-h-[0px] '
        }  bg-gray-200 border-black  border-l-2 border-r-2 overflow-hidden rounded-b-md w-[90%] transition-all duration-400 ease-in shadow-inner px-4`}
      >
        {scannerName && (
          <>
            <div className="w-full h-fit flex flex-row flex-wrap justify-start items-center my-2">
              <p className="font-semibold">Pet Finder:&nbsp;</p>
              <p>{scannerName ? scannerName : 'N/A'}</p>
            </div>
            <hr className="w-full" />
          </>
        )}

        {message && (
          <>
            <div className="w-full h-fit flex flex-row flex-wrap justify-start items-center my-2">
              <p className="font-semibold">Message:&nbsp;</p>
              <p>{message ? message : 'N/A'}</p>
            </div>
            <hr className="w-full" />
          </>
        )}
        {coordinates && (
          <>
            <div className="w-full h-fit flex flex-row flex-wrap justify-start items-center my-2">
              <p className="font-semibold">Location:&nbsp;</p>
              {coordinates ? (
                <Link
                  href={`https://www.google.com/maps/place/${coordinates?.lat},${coordinates?.lng}`}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-primary hover:underline underline"
                >
                  {coordinates?.lat}, {coordinates?.lat}
                </Link>
              ) : (
                <p>Not Submitted</p>
              )}
            </div>
            <hr className="w-full" />
          </>
        )}
      </div>
    </>
  );
};

export default ScanHistoryItem;
