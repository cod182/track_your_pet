'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { ClimbingBoxLoader } from 'react-spinners';

declare interface AuthCheckProps {
  notAuthRedirect?: boolean;
  notAuthRedirectUrl?: string;
  notAuthComponent?: any;
  authRedirect?: boolean;
  authRedirectUrl?: string;
  children: any;
}

const AuthCheck = ({
  notAuthRedirect,
  notAuthRedirectUrl,
  authRedirect,
  authRedirectUrl,
  children,
}: AuthCheckProps) => {
  const { status } = useSession();
  console.log(status);

  switch (status) {
    case 'unauthenticated': {
      if (notAuthRedirect) {
        redirect(`${notAuthRedirectUrl}`);
      }
      return <div>{children} </div>;
    }

    case 'loading':
      return (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <p className="my-4">Checking login status</p>
          <ClimbingBoxLoader color="cyan" />
        </div>
      );

    case 'authenticated': {
      if (authRedirect) {
        redirect(`${authRedirectUrl}`);
      }
      return <div>{children}</div>;
    }

    default:
      redirect('/');
  }
};

export default AuthCheck;
