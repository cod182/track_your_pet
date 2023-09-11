import { petProps, petScanHistory } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ScanHistoryItem } from '..';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';

declare interface petProfileProps {
  petData: petProps;
}

const PetProfile = (petData: petProfileProps) => {
  const router = useRouter();

  const pet = petData.petData;
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
    scanHistory,
  }: petProps = pet;

  const deleteClick = async (clickType: string) => {
    const deleteBtn: any = document.getElementById('delete-button');
    const deleteBtnText: any = document.getElementById('delete-button-text');
    const selectionContainer: any = document.getElementById(
      'selection-container'
    );
    const yesBtn: any = document.getElementById('yes-button');
    const noBtn: any = document.getElementById('no-button');

    if (clickType === 'cancel') {
      deleteBtnText.innerText = 'Delete';
      yesBtn.classList.add('hidden');
      noBtn.classList.add('hidden');
      deleteBtn.classList.remove('min-w-[200px]');
      deleteBtn?.removeAttribute('disabled', false);
      selectionContainer?.classList.remove('max-h-[100px]');
      selectionContainer?.classList.add('max-h-[0px]');
    } else if (clickType === 'deleteCheck') {
      deleteBtnText.innerText = 'Are You Sure?';
      yesBtn.classList.remove('hidden');
      noBtn.classList.remove('hidden');
      deleteBtn.classList.add('min-w-[200px]');
      deleteBtn?.setAttribute('disabled', true);
      selectionContainer?.classList.add('max-h-[100px]');
      selectionContainer?.classList.remove('max-h-[0px]');
    } else if (clickType === 'deletePet') {
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
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-8">
      <section className="w-full h-fit flex flex-col sm:flex-row justify-evenly items-center">
        <button className="my-2 w-fit min-w-[100px] h-fit py-2 px-4 bg-gradient-to-tr to-primary from-cyan-400 hover:to-cyan-600 rounded-lg shadow-xl font-semibold text-white hover:text-black hover:shadow-inner transition-all ease-in duration-400">
          Edit
        </button>
        <div className="my-2 h-fit w-fit flex flex-col justify-center items-center">
          <button
            id="delete-button"
            onClick={() => deleteClick('deleteCheck')}
            className="w-fit min-w-[100px] h-fit py-2 px-4 bg-gradient-to-tr to-red-200 from-red-400 hover:to-red-600 rounded-lg shadow-xl font-semibold text-white hover:text-black hover:shadow-inner transition-all ease-in duration-300"
          >
            <span id="delete-button-text">Delete</span>
          </button>
          {/* Selection button container Delete / Cancel */}
          <div
            id="selection-container"
            className="bg-gray-300 w-fit h-fit overflow-hidden flex flex-row justify-between items-center transition-all duration-1000 ease-in rounded-b-md
          "
          >
            <button
              id="yes-button"
              className="hidden w-fit h-fit font-semibold text-md text-white hover:text-black p-2 m-2 rounded-md bg-red-600 hover:bg-red-400  hover:border-green-300"
              onClick={() => deleteClick('deletePet')}
            >
              Delete Pet
            </button>
            <button
              id="no-button"
              className="hidden w-fit h-fit font-semibold text-md text-white hover:text-black p-2 m-2 rounded-md bg-cyan-600 hover:bg-cyan-400 hover:border-green-300"
              onClick={() => deleteClick('cancel')}
            >
              Cancel
            </button>
          </div>
        </div>
      </section>
      {/* Image / Name section */}
      <section className="w-full h-fit flex flex-col xs:flex-row justify-between items-center px-5">
        {/* Image Container */}
        <div className="w-[150px] xs:w-[200px] sm:w-[300px] h-auto relative aspect-square border-2 border-black rounded-full overflow-hidden shadow-xl">
          <Image
            src={petImage.image}
            alt={petName.text}
            fill
            sizes="w-full h-full"
            className="contain"
          />
        </div>
        <div className="relative w-fit">
          <h2
            className="font-bold text-center xs:text-end w-fit mx:auto sm:mx-0"
            style={{ fontSize: 'calc(20px + 6vmin)' }}
          >
            {petName.text}
          </h2>
          <p
            className={`text-xs w-fit text-end ${
              petName!.public ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {petName.public
              ? 'Visible when scanned'
              : 'Not visible when scanned'}
          </p>
        </div>
      </section>

      <hr className="w-full h-[2px] my-4" />

      {/* Message Section */}
      <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-5 relative">
        {/* Home Address Section */}
        <div className="w-full relative mb-2">
          <h2 className="w-full h-fit py-2 font-semibold text-2xl">
            Message from owner
          </h2>
          <p className="w-full text-lg">
            {message!.message ? message!.message : 'Not Provided'}
          </p>
          <div className="">
            <p
              className={`text-xs w-fit text-start ${
                message!.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {message!.public
                ? 'Visible when scanned'
                : 'Not visible when scanned'}
            </p>
          </div>
        </div>
      </section>

      <hr className="w-full h-[2px] my-4" />

      {/* Info Table Section */}
      <section className="w-full h-fit flex flex-col justify-start items-center py-6 px-5 relative">
        <h2 className="w-full h-fit py-2 font-semibold text-2xl">Pet Info</h2>
        <table className="border-[1px] border-gray-400 w-full">
          <tbody>
            {/* Date of Birth */}
            <tr className="border-[1px] border-gray-400">
              <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
                Date of Birth
              </td>
              <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
                {dob?.birthday ? dob?.birthday : 'N/A'}
              </td>
              <td
                className={`border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2 ${
                  dob?.public ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {dob?.public ? 'Visible' : 'Not Visible'}
              </td>
            </tr>

            {/* Pet Type */}
            <tr className="border-[1px] border-gray-400">
              <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
                petType
              </td>
              <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2 capitalize">
                {petType ? petType : 'N/A'}
              </td>
              <td
                className={`border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2 text-green-500`}
              >
                Visible
              </td>
            </tr>

            {/* Breed */}
            <tr className="border-[1px] border-gray-400">
              <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
                Breed
              </td>
              <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
                {breed?.text ? breed?.text : 'N/A'}
              </td>
              <td
                className={`border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2 ${
                  breed?.public ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {breed?.public ? 'Visible' : 'Not Visible'}
              </td>
            </tr>

            {/* Color */}
            <tr className="border-[1px] border-gray-400">
              <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
                Colour
              </td>
              <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
                {color?.text ? color?.text : 'N/A'}
              </td>
              <td
                className={`border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2 ${
                  color?.public ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {color?.public ? 'Visible' : 'Not Visible'}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr className="w-full h-[2px] my-4" />

      {/* Address Section */}
      <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-5 relative">
        <h2 className="w-full h-fit py-2 font-semibold text-2xl">Address</h2>
        {/* Home Address Section */}
        <div className="w-full relative mb-2">
          <p className="w-full">
            My Home address is:&nbsp;
            {homeAddress!.text ? (
              <Link
                className="hover:underline hover:text-primary"
                href={`https://www.google.com/maps/place/${homeAddress!.text}`}
                target="_blank"
              >
                {homeAddress!.text}
              </Link>
            ) : (
              'Not Provided'
            )}
          </p>
          <div className="">
            <p
              className={`text-xs w-fit text-start ${
                homeAddress!.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {homeAddress!.public
                ? 'Visible when scanned'
                : 'Not visible when scanned'}
            </p>
          </div>
        </div>
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
          <div className="">
            <p
              className={`text-xs w-fit text-start ${
                what3words!.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {what3words!.public
                ? 'Visible when scanned'
                : 'Not visible when scanned'}
            </p>
          </div>
        </div>
      </section>

      <hr className="w-full h-[2px] my-4" />

      {/* Contact Section */}
      <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-5 relative">
        <h2 className="w-full h-fit py-2 font-semibold text-2xl">
          Contact Info
        </h2>
        {/* Phone */}
        <div className="w-full relative mb-2">
          <a href={`tel:+${contactNumber}`} className="w-full">
            <span>Contact Number:&nbsp;</span>
            <span className="">
              {contactNumber!.phone ? contactNumber!.phone : 'Not Provided'}
            </span>
          </a>
          <div className="">
            <p
              className={`text-xs w-fit text-start ${
                contactNumber!.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {contactNumber!.public
                ? 'Visible when scanned'
                : 'Not visible when scanned'}
            </p>
          </div>
        </div>
        <hr className="w-full h-[2px] my-4" />
        {/* Email */}
        <div className="w-full relative mt-2">
          <a href={`mailto:${contactEmail}`} className="w-full">
            Contact Email:&nbsp;
            {contactEmail!.email ? contactEmail!.email : 'Not Provided'}
          </a>
          <div className="">
            <p
              className={`text-xs w-fit text-start ${
                contactEmail!.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {contactEmail!.public
                ? 'Visible when scanned'
                : 'Not visible when scanned'}
            </p>
          </div>
        </div>
      </section>

      <hr className="w-full h-[2px] my-4" />

      {/* Scan History */}
      <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-5 relative">
        <h2 className="w-full h-fit py-2 font-semibold text-2xl">
          Scan History
        </h2>
        {scanHistory!.map(
          ({
            dateTime,
            coordinates,
            message,
            scannerName,
            contactDetail,
          }: petScanHistory) => (
            <ScanHistoryItem
              key={dateTime.replace(' ', '')}
              dateTime={dateTime}
              coordinates={coordinates}
              message={message}
              scannerName={scannerName}
              contactDetail={contactDetail}
            />
          )
        )}
      </section>
    </div>
  );
};

export default PetProfile;
