'use client';

import { useState, useEffect } from 'react';
import clearSky from '@public/assets/images/clear.webp';
import cloudySky from '@public/assets/images/cloudy.webp';
import windAni from '@public/assets/images/wind-turbine.gif';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';
import { AiFillWarning } from 'react-icons/ai';

import {
  ConvertUnixTimeToHour,
  convertUnixTimeToDay,
} from '@utils/useConvertUnix';

import { AiOutlineArrowUp } from 'react-icons/ai';
import { LoadingElement } from '..';
import Image from 'next/image';

const WeatherBar = () => {
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState<any>();
  const [weatherOpen, setWeatherOpen] = useState(false);

  useEffect(() => {
    const openApiKey = process.env.NEXT_PUBLIC_OPEN_WEATHER_API;

    const fetchWeather = async (position: any) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${openApiKey}`
      );
      const weatherRes = await response.json();

      if (response.status === 200) {
        setWeatherData(weatherRes);
      }
    };
    const geoError = () => {
      setError(true);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeather, geoError);
    } else {
      setError(true);
    }
  }, []);

  const [forcastHourly, setForcastHourly] = useState(true);
  let hourlyWeatherLimited = weatherData?.hourly?.slice(0, 6);
  let dailyWeatherLimited = weatherData?.daily?.slice(0, 6);

  if (weatherData) {
    return (
      <>
        <div className="w-full h-auto flex flex-col justify-center items-center mt-4 sm:mt-1 max-w-5xl mx-auto relative">
          {weatherData.alerts.map(({ event, start, end, tags }: any) => {
            return (
              <div
                key={start + end}
                className="w-fit h-fit flex flex-row items-center rounded-xl bg-yellow-400 border-black border-2 shadow-xl p-2"
              >
                <div className="flex flex-col justify-center items-center px-4">
                  <AiFillWarning className="text-[80px]" />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-semibold">{event}</p>

                  <div className="w-full h-fit flex flex-row items-center justify-between">
                    <p className="mx-2">
                      Starts:&nbsp;
                      <span>
                        {convertUnixTimeToDay(start)}&nbsp;
                        {ConvertUnixTimeToHour(start)}
                      </span>
                    </p>
                    <p className="mx-2">
                      Ends:&nbsp;
                      <span>
                        {convertUnixTimeToDay(end)}&nbsp;
                        {ConvertUnixTimeToHour(end)}
                      </span>
                    </p>
                  </div>
                  <p className="font-normal">
                    Weather warning for:&nbsp;
                    {tags.map((key: any, v: String) => (
                      <span key={key}>Rain&nbsp;</span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}

          <div
            className={`h-auto my-4 flex flex-row flex-wrap justify-center items-center select-none`}
          >
            {/* Weather & Temperature */}
            <div
              className="relative w-auto h-[70px] flex justify-center items-center bg-[#0e8fff9a] shadow rounded-xl px-2 mx-2 font-semibold my-2 md:m-none"
              style={{
                backdropFilter: 'blur(1px)',
              }}
            >
              <div className="flex flex-col justify-center items-center p-2 text-sm mr-2">
                <img
                  className="h-[40px] w-[40px]"
                  src={`https://openweathermap.org/img/w/${weatherData?.current?.weather?.[0]?.icon}.png`}
                  alt={`The current weather is ${weatherData?.current?.weather?.[0]?.main}`}
                />
                <p className="capitalize">
                  {weatherData?.current?.weather?.[0]?.main}
                </p>
              </div>

              <div className="flex flex-col items-end justify-center text-sm h-full">
                <p className="capitalize">
                  Temp:&nbsp;
                  {weatherData?.current?.temp.toFixed(1)}
                  <sup>o</sup>C
                </p>
                <p className="capitalize">
                  Feels Like:&nbsp;
                  {weatherData?.current?.feels_like.toFixed(1)}
                  <sup>o</sup>C
                </p>
              </div>
            </div>

            {/* Wind Speed */}
            <div
              className={`relative overflow-hidden w-[100px] h-[70px] flex flex-col justify-center items-center rounded-xl px-2 m-2 bg-[#fff0] bg-no-repeat bg-left-bottom	`}
              style={{
                backgroundImage: `url(${windAni})`,
                backdropFilter: 'blur(1px)',
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-full bg-[#0e8fff9a] text-black text-semibold flex flex-col justify-center items-end font-semibold px-2 leading-10 shadow"
                style={{
                  backdropFilter: 'blur(1px)',
                }}
              >
                <p className="text-sm">Wind Speed</p>
                <p className="capitalize">
                  {weatherData?.current?.wind_speed.toFixed(0)} mph
                </p>
                <p className="text-[5px] absolute bottom-[-17px]">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://icons8.com/icon/Q83OPXa8MS8N/wind-turbine"
                  >
                    Wind Turbine
                  </a>
                  icon by
                  <a target="_blank" rel="noreferrer" href="https://icons8.com">
                    Icons8
                  </a>
                </p>
              </div>
            </div>
            {/* Wind Direction */}
            <div className="h-[70px] w-[70px] relative bg-[#0e8fff9a] rounded-xl font-semibold my-2">
              <div className="absolute top-[18px] left-[18px] h-[50%] w-[50%] border border-black rounded-full"></div>
              <p className="absolute top-[0px] left-[30px]">N</p>
              <p className="absolute right-[6px] top-[26px]">E</p>
              <p className="absolute bottom-[0px] left-[30px]">S</p>
              <p className="absolute left-[4px] top-[26px]">W</p>
              <AiOutlineArrowUp
                className="text-2xl absolute top-[26px] left-[24px]"
                style={{
                  transform: `rotate(${weatherData?.current?.wind_deg}deg)`,
                }}
              />
            </div>

            {/* Cloud Cover */}
            <div className="flex flex-row items-end justify-between text-sm h-[70px] select-none my-2">
              <div
                className={`relative overflow-hidden w-[90px] h-full flex flex-col justify-center items-center rounded-xl px-2 mx-2 bg-cover`}
              >
                <Image
                  src={clearSky}
                  alt="clear"
                  className="absolute w-full h-full top-0 right z-[0]"
                />
                <Image
                  src={cloudySky}
                  alt="cloudy"
                  className={`absolute w-full h-full top-[0] z-[1]`}
                  style={{
                    right: `${100 - weatherData?.current?.clouds}%`,
                  }}
                />

                <div className="absolute top-0 left-0 w-full h-full bg-[#9e9e9e75] text-white text-semibold flex flex-col justify-center items-center font-semibold">
                  <p className="z-[2] text-center text-sm">Cloud Cover</p>
                  <p className="capitalize z-[2]">
                    {weatherData?.current?.clouds}%
                  </p>
                </div>
              </div>
            </div>
            {/* Sunrise/Sunset */}
            <div
              className="relative w-auto h-[70px] flex justify-center items-center bg-[#0e8fff9a] shadow rounded-xl px-2 m-2 font-semibold"
              style={{
                backdropFilter: 'blur(1px)',
              }}
            >
              <div className="flex flex-col justify-center items-center mx-1">
                <p>Sunrise</p>
                <BsFillSunriseFill className="text-2xl" />
                <p>{ConvertUnixTimeToHour(weatherData?.current?.sunrise)}</p>
              </div>
              <div className="flex flex-col justify-center items-center mx-1">
                <p>Sunset</p>
                <BsFillSunsetFill className="text-2xl" />
                <p>{ConvertUnixTimeToHour(weatherData?.current?.sunset)}</p>
              </div>
            </div>
          </div>
          <button
            className="w-full lg:w-[80%] h-[20px] bg-[#3c83f6d6] hover:bg-[#60a5fad6] flex justify-center items-center rounded-full shadow-lg transition-all duration-500 ease-in-out"
            style={{
              backdropFilter: 'blur(1px)',
            }}
            onClick={() => {
              setWeatherOpen((prev) => {
                return prev ? false : true;
              });
            }}
          >
            {weatherOpen ? 'Hide Full Forecast' : 'Show Full Forecast'}
          </button>
          {/* Forecast container */}
          <div
            className={`mx-3 md:mx-0 flex flex-col sm:flex-row flex-wrap justify-center items-center select-none bg-[#a1a1a1a1] px-6 py-2 rounded-bl-xl rounded-br-xl max-w-4xl overflow-hidden transition-all duration-500 ease-in-out ${
              weatherOpen === true ? 'max-h-[500px]' : 'max-h-[0px]'
            }`}
            style={{
              backdropFilter: 'blur(1px)',
              boxShadow: 'inset gray 0px 9px 12px',
            }}
          >
            <div
              className={`flex flex-col sm:flex-row flex-wrap justify-center items-center select-none transition-all duration-1000 ease-in-out ${
                weatherOpen === true ? 'opacity-1' : 'opacity-0'
              }`}
            >
              <p className="text-white font-semibold">Forecast: </p>
              <div className="w-[150px] h-auto flex justify-between items-center cursor-pointer bg-[#b7b7b7a1] rounded-xl py-2 px-1 mx-2 relative ">
                <p
                  onClick={() => {
                    setForcastHourly((prev) => {
                      return prev ? false : true;
                    });
                  }}
                  className={`mx-2 z-[1] text-center w-[75px] ease-in-out transition-all duration-200 ${
                    forcastHourly ? 'text-white font-semibold' : 'text-black'
                  }`}
                >
                  Hourly
                </p>
                <p
                  onClick={() => {
                    setForcastHourly((prev) => {
                      return prev ? false : true;
                    });
                  }}
                  className={`mx-2 z-[1] text-center w-[75px] ease-in-out transition-all duration-200 ${
                    forcastHourly ? 'text-black' : 'text-white font-semibold'
                  }`}
                >
                  Daily
                </p>
                <span
                  className={`absolute cursor-pointer ease-in-out transition-all duration-200 bg-[#00ccffcf] w-[60px] h-[30px] opacity-[0.6] rounded-xl borer-black z-[0] ${
                    forcastHourly ? 'left-[9px]' : 'left-[80px]'
                  }`}
                ></span>
              </div>

              {forcastHourly ? (
                <div
                  className=" sm:max-w-2xl font-normal text-sm mx-auto h-auto flex flex-row flex-wrap justify-between items-center bg-[#0e8fff9a] shadow rounded-xl px-2 m-2 overflow-x-scroll p-2"
                  style={{
                    backdropFilter: 'blur(1px)',
                  }}
                >
                  {hourlyWeatherLimited.map((hourData: any) => {
                    return (
                      <div
                        key={hourData.dt}
                        className="flex flex-wrap flex-col justify-between items-center w-[70px] mx-1"
                      >
                        <p className="capitalize text-center h-[40px]">
                          {hourData.weather[0].description}
                        </p>
                        <img
                          className="w-[40px] h-[40px]"
                          src={`https://openweathermap.org/img/w/${hourData.weather[0].icon}.png`}
                          alt="weather Icon"
                        />
                        <p className="h-[20px] font-semibold">
                          {ConvertUnixTimeToHour(hourData.dt).slice(0, 2)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  className="sm:max-w-xl font-normal text-sm mx-auto h-auto flex flex-row flex-wrap justify-between items-center bg-[#0e8fff9a] shadow rounded-xl px-2 m-2 overflow-x-scroll p-2"
                  style={{
                    backdropFilter: 'blur(1px)',
                  }}
                >
                  {dailyWeatherLimited.map((dailyData: any) => {
                    return (
                      <div
                        key={dailyData.dt}
                        className="flex flex-wrap flex-col justify-between items-center w-[70px] mx-1"
                      >
                        <p className="capitalize text-center h-[40px]">
                          {dailyData.weather[0].description}
                        </p>
                        <img
                          className="h-[40px] w-[40px]"
                          src={`https://openweathermap.org/img/w/${dailyData.weather[0].icon}.png`}
                          alt="weather Icon"
                        />
                        <p className="h-[20px] font-semibold">
                          {convertUnixTimeToDay(dailyData.dt)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  } else if (error) {
    return (
      <p className="w-full text-center text-sm text-gray-400">
        Sorry, failed to fetch the weather
      </p>
    );
  } else {
    return <LoadingElement />;
  }
};

export default WeatherBar;
