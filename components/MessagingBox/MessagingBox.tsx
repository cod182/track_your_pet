import { GeoLocationSelector, ScanHistoryItem } from '@/components';

const MessagingBox = ({ petId }: any) => {
  const submitMessageHandler = async (e: any) => {
    e.preventDefault();
    console.log(e.target);
    let currentDate = new Date();
    let coords = {
      lat: `${e.target[2].attributes[2].value}`,
      lng: `${e.target[2].attributes[3].value}`,
    };

    try {
      const response = await fetch(`/api/petscans/new/${petId}`, {
        method: 'POST',
        body: JSON.stringify({
          petId: petId,
          dateTime: currentDate.toString(),
          coordinates: coords,
          message: e.target[1].value,
          scannerName: e.target[0].value,
        }),
      });

      if (response.ok) {
        console.log('thanks');
      }
    } catch (error) {
      console.log(error);
    } finally {
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
      >
        Send Message
      </button>
    </form>
  );
};

export default MessagingBox;
