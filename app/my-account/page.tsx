'use client';
import { useSession } from 'next-auth/react';
import { AuthCheck, TitleComp } from '@/components';
import { useEffect, useState } from 'react';
import { setInterval } from 'timers';

const page = () => {
  useEffect(() => {
    const getDateTime = (request: string) => {
      let currentdate = new Date();
      let date = currentdate.toLocaleDateString('en-gb');

      let hours = currentdate.getHours();
      let minutes =
        currentdate.getMinutes() <= 9
          ? '0' + currentdate.getMinutes()
          : currentdate.getMinutes();

      if (request === 'date') {
        return date.toString();
      } else if (request === 'time') {
        return hours.toString() + ':' + minutes.toString();
      }
    };

    setInterval(() => {
      let time = getDateTime('time');
      let date = getDateTime('date');
      setTime(time);
      setDate(date);
    }, 1000);
  }, []);

  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const session = useSession();
  console.log();
  return (
    <AuthCheck notAuthRedirectUrl="/login" notAuthRedirect>
      <div className="flex flex-col sm:flex-row justify-between flex-wrap px-4">
        <div className="flex flex-row w-full sm:w-[80%]">
          <TitleComp
            position="start"
            title={`Welcome ${session.data?.user?.name}!`}
            color="#38a4d1"
            size="calc(20px + 2.5vmin)"
          />
        </div>
        <div className="w-full sm:w-[20%] flex flex-row sm:flex-col">
          <div className="mr-4 sm:mr-0">
            <TitleComp
              position="start"
              title={date}
              color="#38a4d1"
              size="calc(12px + 1vmin)"
            />
          </div>
          <div className="mr-4 sm:mr-0">
            <TitleComp
              position="start"
              title={time}
              color="#38a4d1"
              size="calc(12px + 1vmin)"
            />
          </div>
        </div>
      </div>
    </AuthCheck>
  );
};

export default page;
