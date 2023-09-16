const InstantLoggingModal = ({ petId }: any) => {
  const success = (position: any) => {
    let coords = {
      lat: `${position.coords.latitude}`,
      lng: `${position.coords.longitude}`,
    };
    console.log(coords);
    submitLogScan(coords);
  };

  // Geolocation Error function
  const error = () => {
    console.log('Unable to retrieve your location');
    submitLogScan();
  };

  // get the geo location function
  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }
  };

  const submitLogScan = async (coords?: any) => {
    let currentDate = new Date();

    try {
      const response = await fetch(`/api/petscans/new/${petId}`, {
        method: 'POST',
        body: JSON.stringify({
          petId: petId,
          dateTime: currentDate.toString(),
          typeOfScan: 'pet scan',
          coordinates: coords,
        }),
      });
      if (response.ok) {
        console.log('Logged Scan');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logScan = async () => {
    try {
      getLocation();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="z-[1099] fixed top-0 left-0 w-full h-full bg-gray-300/50 flex flex-col justify-center items-center"
      aria-modal
      onLoad={void logScan()}
    >
      <div
        className="w-[90%] h-[90%] bg-white rounded-xl"
        aria-label="pop up box"
      >
        <div
          aria-label="pop content container"
          className="p-5 flex flex-col just0fy-center items-center"
        >
          <p>Thank you for scanning this pet.</p>
          <p>
            Please click allow for location access to enable to send the owner
            the pet's location
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstantLoggingModal;
