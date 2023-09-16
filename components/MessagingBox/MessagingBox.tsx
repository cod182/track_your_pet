'use client';
import { GeoLocationSelector } from '@/components';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const MessagingBox = ({ petId }: any) => {
  const router = useRouter();
  const [sendingMessage, setSendingMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);

  const submitMessageHandler = async (e: any) => {
    e.preventDefault();
    setErrorMessage(false);
    setSendingMessage(true);
    setSentMessage(false);

    let currentDate = new Date();
    let coords;

    if (e.target[2].attributes[2].value) {
      coords = {
        lat: `${e.target[2].attributes[2].value}`,
        lng: `${e.target[2].attributes[3].value}`,
      };
    }

    try {
      const response = await fetch(`/api/petscans/new/${petId}`, {
        method: 'POST',
        body: JSON.stringify({
          petId: petId,
          dateTime: currentDate.toString(),
          coordinates: coords,
          message: e.target[1].value,
          scannerName: e.target[0].value,
          typeOfScan: 'Message',
        }),
      });

      if (response.ok) {
        setSentMessage(true);
        setSendingMessage(false);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(true);
      setSentMessage(false);
    } finally {
      setSentMessage(false);
      setSendingMessage(false);
      console.log('done');
    }
  };

  return (
    <form
      className="w-full max-w-[600px] h-fit p-5 flex flex-col justify-center items-center"
      onSubmit={(e) => submitMessageHandler(e)}
    >
      <input
        className="w-full mx-4 my-2 border-black border-[1px] bg-gray-300 text-black px-4 py-2 rounded-md "
        placeholder="Your Name"
        type="text"
        name="name"
        id="name"
        required
      />
      <textarea
        className="w-full min-h-[100px] mx-4 my-2 border-black border-[1px] bg-gray-300 text-black px-4 py-2 rounded-md"
        placeholder="Your Message"
        name="message"
        id="message"
        required
      ></textarea>

      <div className="flex flex-row justify-center items-center flex-wrap my-2">
        <p>Location Access:&nbsp;</p>
        <GeoLocationSelector />
      </div>
      <button
        type="submit"
        className="w-fit h-fit mt-4 px-4 py-2 bg-primary hover:bg-primaryLight rounded-lg text-white hover:text-black shadow-xl hover:shadow-inner"
        disabled={sendingMessage}
      >
        {sentMessage
          ? 'Sent!'
          : sendingMessage
          ? 'Sending Message'
          : 'Send Message'}
      </button>
      {errorMessage && (
        <p className="text-red-400 text-sm">Error Sending Message!</p>
      )}
      {sentMessage && (
        <p className="text-gren-400 text-sm">Message Sent, Thank You!</p>
      )}
    </form>
  );
};

export default MessagingBox;
