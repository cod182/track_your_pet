'use client';
import { DotSpinner } from '@uiball/loaders';
import { useState } from 'react';

declare interface locationProps {
  latitude: string;
  longitude: string;
}

const GeoLocationSelector = () => {
  const [locationAccess, setLocationAccess] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);
  const [errorState, setGeoError] = useState(false);
  const [geoLocation, setGeoLocation] = useState<locationProps>({
    latitude: '',
    longitude: '',
  });

  // Moves the check to the right option - OFF
  const moveRight = () => {
    const onSelected: any = document.getElementById('on');
    const offSelected: any = document.getElementById('off');
    console.log('moving right');
    onSelected!.checked = true;
    offSelected!.checked = false;
    offSelected.removeAttribute('defaultSelected');
  };
  // Moves the check to the left option - ON
  const moveLeft = () => {
    const onSelected: any = document.getElementById('on');
    const offSelected: any = document.getElementById('off');
    console.log('moving left');
    offSelected!.checked = true;
    onSelected!.checked = false;
    setLocationAccess(false);
  };

  //Geolocation success function
  const success = (position: any) => {
    setGeoLocation({
      latitude: `${position.coords.latitude}`,
      longitude: `${position.coords.longitude}`,
    });

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(position.coords.latitude);
    setGeoLoading(false);
    setLocationAccess(true);
    setGeoError(false);
    moveRight();
  };

  // Geolocation Error function
  const error = () => {
    setGeoLoading(false);
    moveLeft();
    setGeoError(true);
    console.log('Unable to retrieve your location');
  };

  // get the geo location function
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
      setGeoLoading(true);
    } else {
      setGeoLoading(false);
      setGeoError(true);
      moveLeft();
      console.log('Geolocation not supported');
    }
  };

  // Changing the slider
  const changeSlider = async () => {
    const offSelected: any = document.getElementById('off');
    if (offSelected!.checked) {
      console.log('here');
      getLocation();
    } else {
      moveLeft();
    }
  };
  return (
    <>
      <div className=" rounded-2xl border-2 border-black flex flex-row items-center justify-evenly relative h-[40px] w-[100px] overflow-hidden transition-all duration-400 ease-in-out">
        <div
          id="slider"
          className={`flex flex-col justify-center items-center absolute w-[50%] h-full bg-gray-300 top-0 z-[999] transition-all duration-400 ease-in-out cursor-pointer  ${
            locationAccess
              ? 'border-l-2 border-black left-[48px] rounded-r-2xl'
              : 'border-r-2 border-black left-0 rounded-l-2xl'
          }`}
          onClick={() => changeSlider()}
        >
          {geoLoading ? (
            <DotSpinner size={20} speed={0.9} color="black" />
          ) : null}
        </div>
        <div className="font-semibold relative h-full bg-green-300 w-[50%] flex flex-col justify-center items-center transition-all duration-400 ease-in-out">
          <input
            type="radio"
            name="locationAccess"
            id="on"
            className="rounded-full hidden"
            value="on"
            onChange={() => null}
            data-lat={geoLocation.latitude}
            data-lng={geoLocation.longitude}
          />
          <label htmlFor="true">ON</label>
        </div>
        <div className="font-semibold relative h-full bg-red-300 w-[50%] flex flex-col justify-center items-center transition-all duration-400 ease-in-out">
          <input
            defaultChecked
            type="radio"
            name="locationAccess"
            id="off"
            className="rounded-full hidden"
            value="off"
            onChange={() => null}
          />
          <label htmlFor="false">OFF</label>
        </div>
      </div>
      {errorState ? (
        <div className="w-full flex flex-col justify-center items-center mx-auto text-red-400 text-sm my-2">
          <p>Location access not available.</p>
          <p>Please allow location access and try again.</p>
        </div>
      ) : null}
    </>
  );
};

export default GeoLocationSelector;
