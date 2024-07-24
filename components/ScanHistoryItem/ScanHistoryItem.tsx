'use client';

import React, { useState } from 'react';
import { coordsProps, petScanHistory } from '@/types';

import { AiTwotoneMessage } from 'react-icons/ai';
import { BsQrCode } from 'react-icons/bs';
import { FaLocationArrow } from 'react-icons/fa';
import Link from 'next/link';

type Props = {
  customOnClickAction?: (itemId: string) => void;
  _id: string;
  petId: string;
  dateTime: string;
  coordinates?: coordsProps;
  message?: string;
  scannerName?: string;
  typeOfScan: string;
  read: boolean;
};


const ScanHistoryItem = ({
  _id,
  dateTime,
  coordinates,
  message,
  scannerName,
  typeOfScan,
  read,
  customOnClickAction
}: Props) => {

  // Use States
  const [open, setOpen] = useState(false);
  const [notificationRead, setNotificationRead] = useState(read);

  const [deleteClicked, setDeleteClicked] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const deleteScanItem = async () => {
    try {
      let deleteRes = await fetch(`/api/petscans/${_id}`, {
        method: 'DELETE',
      });
      if (deleteRes.status === 200) {
        console.log('Scan deleted');
        setDeleted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className={`w-full min-h-[50px] overflow-hidden ${deleted && 'hidden'
          } ${typeOfScan === 'pet scan'
            ? 'bg-primary hover:bg-primaryLight'
            : 'bg-secondary hover:bg-green-500'
          }  ${typeOfScan === 'pet scan'
            ? coordinates
              ? 'cursor-pointer'
              : 'cursor-default'
            : 'cursor-pointer'
          } rounded-md flex flex-col xxs:flex-row justify-between items-center px-2 mt-2 shadow-xl `}
      >
        <div
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
            if (customOnClickAction) {
              if (!notificationRead) {
                setNotificationRead(true)
                customOnClickAction(_id);
              }
            }
          }}
          className="flex flex-row flex-wrap justify-start items-center w-full h-full px-2 py-2"
        >
          <span className={` mr-2 rounded-full bg-red-500 transition-all ease duration-200 ${notificationRead ? 'h-0 w-0' : 'h-[15px] w-[15px]'}`} />

          <span className="mr-2">{coordinates && <FaLocationArrow />}</span>

          <p className="font-semibold">Scanned:&nbsp;</p>
          <span className="font-normal">{dateTime}</span>
          <span>&nbsp;-&nbsp;</span>
          <p className="capitalize font-semibold">{typeOfScan}</p>
          <span className="ml-2">
            {typeOfScan === 'pet scan' ? <BsQrCode /> : <AiTwotoneMessage />}
          </span>
        </div>
        <button
          aria-label='Delete a Scan button"'
          className={`right-0 text-black bg-red-400/50 hover:bg-red-600 font-semibold w-full xxs:w-fit  py-2 px-4 rounded-xl text-sm transition-all ease-in duration-300`}
          onClick={() => {
            deleteClicked ? deleteScanItem() : setDeleteClicked(true);
          }}
        >
          {deleteClicked ? 'Confirm' : 'Delete'}
        </button>
      </div>
      <div
        className={`${open
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
