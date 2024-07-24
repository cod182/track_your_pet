'use client';

import { DeleteButton, MessagingBox, ScanHistoryItem } from '..';
import { petProps, petScanHistory } from '@/types';
import { useEffect, useState } from 'react';

import { FaBell } from 'react-icons/fa';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { QrCode } from '@/components';
import { useNotification } from '@/context/notificationContext'; // Adjust the path as needed
import { useRouter } from 'next/navigation';

declare interface petProfileProps {
  petData: petProps;
  owner: Boolean;
}

// Shimmer effect for image loading
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#2AA6E9" offset="20%" />
      <stop stop-color="#085C89" offset="50%" />
      <stop stop-color="#A8E0FD" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#A8E0FD" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) => typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);




const PetProfile = ({ petData, owner }: petProfileProps) => {

  // DECLARATIONS
  const { notifications, addNotification, removeNotification, getUnreadCountForPet, getNotifications } = useNotification();

  const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const router = useRouter();

  // assign the pet Data to pet
  const pet = petData;
  // Spread the pet
  const {
    _id,
    petName,
    petImage,
    dob,
    breed,
    color,
    homeAddress,
    what3words,
    message,
    petType,
    contactEmail,
    contactNumber,
    ownerName
  }: petProps = pet;

  // USE EFFECTS

  // Calling the function on load only
  useEffect(() => {
    if (owner) fetchPetScans(_id);
  }, []);

  useEffect(() => {
    if (owner) {

      if (notifications.length === 0) getNotifications();

      if (_id) {
        setTotalNotifications(getUnreadCountForPet(_id))
      }
    }
  }, [removeNotification]);

  // STATES

  // History filled by the fetchScan History func.
  const [scanHistory, setScanHistory] = useState<petScanHistory[]>([]);
  const [totalNotification, setTotalNotifications] = useState(0);

  // FUNCTIONS

  // fetches the current pet's historic tag scans
  const fetchPetScans = async (_id: any) => {
    const response = await fetch(`/api/petscans/${_id}`);

    const scanData = await response.json();

    setScanHistory(scanData.reverse());
  };

  // Function to delete pet with confirmation
  const deletePet = async () => {
    try {
      let deleteRes = await fetch(`/api/pets/pet/${_id}`, {
        method: 'DELETE',
      });
      if (deleteRes.status === 200) {
        router.push('/my-account/pets');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FadeIn delay={100} transitionDuration={600} className="w-full h-full my-8">
      {owner && (
        <section className="w-full h-fit flex flex-col sm:flex-row justify-evenly items-center">
          <a
            href={`/my-account/pets/edit-pet?id=${pet._id}`}
            className="text-center my-2 w-fit min-w-[100px] h-fit py-2 px-4 bg-gradient-to-tr to-primary from-cyan-400 hover:to-cyan-600 rounded-lg shadow-xl font-semibold text-white hover:text-black hover:shadow-inner transition-all ease-in duration-400"
          >
            Edit
          </a>
          <DeleteButton
            buttonText="Delete"
            deleteFunc={deletePet}
            confirmButtonText="Delete Pet"
          />
        </section>
      )}

      {/* Image / Name section */}
      <section className="w-full h-fit flex flex-col xs:flex-row justify-between items-center px-0 xxs:px-1 xs:px-2 sm:px-5">
        {/* Image Container */}
        <div className="w-[150px] xs:w-[200px] sm:w-[300px] h-auto relative aspect-square border-2 border-black rounded-full overflow-hidden shadow-xl">
          <Image
            src={petImage.image}
            alt={petName.text}
            fill
            sizes="w-full h-full"
            className="contain"
            placeholder={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </div>

        {/* Pet Name */}
        <div className="relative w-fit">
          <h2
            className="font-bold text-center xs:text-end w-full sm:w-fit mx:auto sm:mx-0"
            style={{ fontSize: 'calc(20px + 6vmin)' }}
          >
            {petName.public || owner
              ? petName.text
              : `You've found someone's pet!`}
          </h2>
          {owner && (
            // Pet Name Public?
            <p
              className={`text-xs w-fit text-end ${petName!.public ? 'text-green-500' : 'text-red-500'
                }`}
            >
              {petName.public
                ? 'Visible when scanned'
                : 'Not visible when scanned'}
            </p>
          )}
        </div>
      </section>

      {message!.public || owner ? (
        <>
          <hr className="w-full h-[2px] my-4" />
          {/* Message Section */}
          <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-0 xxs:px-1 xs:px-2 sm:px-5 relative">
            {/* Home Address Section */}
            <div className="w-full relative mb-2">
              <h2 className="w-full h-fit py-2 font-semibold text-2xl">
                Message from owner
              </h2>
              <p className="w-full text-lg">
                {message!.message ? message!.message : 'Not Provided'}
              </p>
              {owner && (
                <div className="">
                  <p
                    className={`text-xs w-fit text-start ${message!.public ? 'text-green-500' : 'text-red-500'
                      }`}
                  >
                    {message!.public
                      ? 'Visible when scanned'
                      : 'Not visible when scanned'}
                  </p>
                </div>
              )}
            </div>
          </section>
        </>
      ) : null}

      <hr className="w-full h-[2px] my-4" />

      {/* Info Table Section */}
      <section className="w-full h-fit flex flex-col justify-start items-center py-6 px-0 xxs:px-1 xs:px-2 sm:px-5 relative">
        <h2 className="w-full h-fit py-2 font-semibold text-2xl">Pet Info</h2>
        <table className="border-[1px] border-gray-400 w-full">
          <tbody>
            {dob!.public || owner ? (
              //Date of Birth
              <tr className="border-[1px] border-gray-400">
                <td className="border-[1px] border-gray-400 w-fit h-fit text-center  py-2">
                  Date of Birth
                </td>
                <td className="border-[1px] border-gray-400 w-fit h-fit text-center  py-2">
                  {dob?.birthday ? dob?.birthday : 'N/A'}
                </td>
                {owner && (
                  <td
                    className={`border-[1px] border-gray-400 w-fit h-fit text-center  py-2 ${dob?.public ? 'text-green-500' : 'text-red-500'
                      }`}
                  >
                    {dob?.public ? 'Visible' : 'Not Visible'}
                  </td>
                )}
              </tr>
            ) : null}

            {/* Pet Type */}
            <tr className="border-[1px] border-gray-400">
              <td className="border-[1px] border-gray-400 w-fit h-fit text-center  py-2">
                Type of pet
              </td>
              <td className="border-[1px] border-gray-400 w-fit h-fit text-center  py-2 capitalize">
                {petType ? petType : 'N/A'}
              </td>
              {owner && (
                <td
                  className={`border-[1px] border-gray-400 w-fit h-fit text-center  py-2 text-green-500`}
                >
                  Visible
                </td>
              )}
            </tr>

            {breed.public || owner ? (
              //Breed
              <tr className="border-[1px] border-gray-400">
                <td className="border-[1px] border-gray-400 w-fit h-fit text-center  py-2">
                  Breed
                </td>
                <td className="border-[1px] border-gray-400 w-fit h-fit text-center  py-2">
                  {breed?.text ? breed?.text : 'N/A'}
                </td>
                {owner && (
                  <td
                    className={`border-[1px] border-gray-400 w-fit h-fit text-center  py-2 ${breed.public ? 'text-green-500' : 'text-red-500'
                      }`}
                  >
                    {breed?.public ? 'Visible' : 'Not Visible'}
                  </td>
                )}
              </tr>
            ) : null}

            {color.public || owner ? (
              // Color
              <tr className="border-[1px] border-gray-400">
                <td className="border-[1px] border-gray-400 w-fit h-fit text-center  py-2">
                  Colour
                </td>
                <td className="border-[1px] border-gray-400 w-fit h-fit text-center  py-2">
                  {color?.text ? color?.text : 'N/A'}
                </td>
                {owner && (
                  <td
                    className={`border-[1px] border-gray-400 w-fit h-fit text-center  py-2 ${color?.public ? 'text-green-500' : 'text-red-500'
                      }`}
                  >
                    {color?.public ? 'Visible' : 'Not Visible'}
                  </td>
                )}
              </tr>
            ) : null}
          </tbody>
        </table>
      </section>

      {homeAddress!.public || what3words!.public || owner ? (
        <>
          <hr className="w-full h-[2px] my-4" />
          {/* Address Section */}
          <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-0 xxs:px-1 xs:px-2 sm:px-5 relative">
            <h2 className="w-full h-fit py-2 font-semibold text-2xl">
              Address
            </h2>
            {/* Home Address */}
            {homeAddress!.public || owner ? (
              <div className="w-full relative mb-2">
                <p className="w-full">
                  My Home address is:&nbsp;
                  {homeAddress!.text ? (
                    <Link
                      className="hover:underline hover:text-primary"
                      href={`https://www.google.com/maps/place/${homeAddress!.text
                        }`}
                      target="_blank"
                    >
                      {homeAddress!.text}
                    </Link>
                  ) : (
                    'Not Provided'
                  )}
                </p>
                {owner && (
                  <div className="">
                    <p
                      className={`text-xs w-fit text-start ${homeAddress!.public ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                      {homeAddress!.public
                        ? 'Visible when scanned'
                        : 'Not visible when scanned'}
                    </p>
                  </div>
                )}
              </div>
            ) : null}

            {what3words!.public || owner ? (
              <>
                <hr className="w-full h-[2px] my-4" />
                {/* What 3 Words Address Section */}
                <div className="w-full relative mt-2">
                  <p className="w-full">
                    My What3Words location is:&nbsp;
                    {what3words!.w3w ? (
                      <Link
                        className="hover:underline hover:text-primary"
                        href={`https://www.what3words.com/${what3words!.w3w}`}
                        target="_blank"
                      >
                        {what3words!.w3w}
                      </Link>
                    ) : (
                      'Not Provided'
                    )}
                  </p>
                  {owner && (
                    <div className="">
                      <p
                        className={`text-xs w-fit text-start ${what3words!.public ? 'text-green-500' : 'text-red-500'
                          }`}
                      >
                        {what3words!.public
                          ? 'Visible when scanned'
                          : 'Not visible when scanned'}
                      </p>
                    </div>
                  )}
                </div>
              </>
            ) : null}
          </section>
        </>
      ) : null}

      {contactNumber!.public || contactEmail!.public || ownerName!.public || owner ? (
        <>
          <hr className="w-full h-[2px] my-4" />

          {/* Contact Section */}
          <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-0 xxs:px-1 xs:px-2 sm:px-5 relative">
            <h2 className="w-full h-fit py-2 font-semibold text-2xl">
              Contact Info
            </h2>
            {/* NAME */}
            {ownerName!.public || owner ? (
              <div className="w-full relative mb-2">
                <p className="w-full">
                  <span>Owner's Name:&nbsp;</span>
                  <span className="">
                    {ownerName!.text
                      ? ownerName!.text
                      : 'Not Provided'}
                  </span>
                </p>
                {owner && (
                  <div className="">
                    <p
                      className={`text-xs w-fit text-start ${ownerName!.public
                        ? 'text-green-500'
                        : 'text-red-500'
                        }`}
                    >
                      {ownerName!.public
                        ? 'Visible when scanned'
                        : 'Not visible when scanned'}
                    </p>
                  </div>
                )}
              </div>
            ) : null}


            {/* Phone */}
            {contactNumber!.public || owner ? (
              <div className="w-full relative mb-2">
                <hr className="w-full h-[2px] my-4" />
                <a href={`tel:+${contactNumber}`} className="w-full">
                  <span>Contact Number:&nbsp;</span>
                  <span className="">
                    {contactNumber!.phone
                      ? contactNumber!.phone
                      : 'Not Provided'}
                  </span>
                </a>
                {owner && (
                  <div className="">
                    <p
                      className={`text-xs w-fit text-start ${contactNumber!.public
                        ? 'text-green-500'
                        : 'text-red-500'
                        }`}
                    >
                      {contactNumber!.public
                        ? 'Visible when scanned'
                        : 'Not visible when scanned'}
                    </p>
                  </div>
                )}
              </div>
            ) : null}

            {contactEmail!.public || owner ? (
              <>
                <hr className="w-full h-[2px] my-4" />
                {/* Email */}
                <div className="w-full relative mt-2">
                  <a href={`mailto:${contactEmail}`} className="w-full">
                    Contact Email:&nbsp;
                    {contactEmail!.email ? contactEmail!.email : 'Not Provided'}
                  </a>
                  {owner && (
                    <div className="">
                      <p
                        className={`text-xs w-fit text-start ${contactEmail!.public
                          ? 'text-green-500'
                          : 'text-red-500'
                          }`}
                      >
                        {contactEmail!.public
                          ? 'Visible when scanned'
                          : 'Not visible when scanned'}
                      </p>
                    </div>
                  )}
                </div>
              </>
            ) : null}
          </section>
        </>
      ) : null}

      {owner && (
        <>
          <hr className="w-full h-[2px] my-4" />
          {/* Scan History */}
          <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-0 xxs:px-1 xs:px-2 sm:px-5 relative">

            <div className='w-full flex flex-row justify-start items-center'>
              <h2 className="w-fit h-fit py-2 font-semibold text-2xl">
                Scan History
              </h2>


              <div className="relative  w-[30px] aspect-square flex flex-col justify-center items-center">
                <FaBell className="text-red-500 text-4xl" />
                <span className="text-white absolute text-xs">
                  {totalNotification}
                </span>
              </div>
            </div>

            {scanHistory!.map(
              ({
                petId,
                dateTime,
                coordinates,
                message,
                scannerName,
                typeOfScan,
                _id,
                read,
              }: petScanHistory) => (
                <ScanHistoryItem
                  key={dateTime.replace(' ', '') + _id}
                  petId={petId}
                  dateTime={dateTime}
                  coordinates={coordinates}
                  message={message}
                  scannerName={scannerName}
                  typeOfScan={typeOfScan}
                  _id={_id}
                  read={read}
                  customOnClickAction={removeNotification}
                />
              )
            )}

          </section>
          <hr className="w-full h-[2px] my-4" />
          {/* QR Code */}
          <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-0 xxs:px-1 xs:px-2 sm:px-5 relative">
            <h2 className="w-full h-fit py-2 font-semibold text-2xl">
              Personal QR code.
            </h2>
            <p className="w-full h-fit font-normal text-md">
              Download you QR code and have it engraved anywhere you want!{' '}
              <span className="text-gray-500">
                e.g collar, harness, lead etc.
              </span>
            </p>
            <p className="w-full h-fit font-normal text-md">
              This QR Code will lead to&nbsp;
              <a
                href={`${websiteUrl}/pet-found?id=${_id}`}
                aria-label="personal pet qr code link"
                target="_blank"
                rel="noopener"
                className="hover:text-primary underline"
              >
                your pets public page.
              </a>
            </p>
            <p className="w-full h-fit text-sm text-gray-400 mb-2">
              *The QR Code may change, but previous ones will still work.
            </p>
            <QrCode
              urlToLinkTo={`${websiteUrl}/pet-found?id=${_id}`}
              qrCodeWidth="100%"
            />
          </section>
        </>
      )}
      {!owner && (
        // Message Section
        <>
          <hr className="w-full h-[2px] my-4" />

          <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-0 xxs:px-1 xs:px-2 sm:px-5 relative">
            <h2 className="w-full h-fit py-2 font-semibold text-2xl">
              Send a message to the owner
            </h2>
            <MessagingBox petId={pet._id} />
          </section>
        </>
      )}
    </FadeIn>
  );
};

export default PetProfile;
