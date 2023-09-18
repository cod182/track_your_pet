const InstantLoggingModal = ({
  petId,
  setScanSubmitted,
  scanSubmitted,
}: any) => {
  const closeModal = () => {
    const modal = document.getElementById('modal-container');
    modal?.classList.add('hidden');
  };

  //geolocation success
  const success = (position: any) => {
    let coords = {
      lat: `${position.coords.latitude}`,
      lng: `${position.coords.longitude}`,
    };
    console.log(coords);
    if (!scanSubmitted) {
      submitLogScan(coords);
    }
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

  // submits the scan date available
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
      setScanSubmitted(true);
      if (response.ok) {
        console.log('Scan logged');
      }
    } catch (error) {
      console.log(error);
    } finally {
      closeModal();
    }
  };

  return (
    <div
      id="modal-container"
      className={`z-[1099] fixed top-0 left-0 w-full h-full bg-gray-300/50 flex flex-col justify-center items-center ${
        scanSubmitted && 'hidden'
      }`}
      aria-modal
      onLoad={void getLocation()}
    >
      <div
        className="w-[90%] h-[90%] bg-white rounded-xl"
        aria-label="pop up box"
      >
        <div
          aria-label="pop content container"
          className="p-5 flex flex-col just0fy-center items-center text-xl font-semibold"
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
