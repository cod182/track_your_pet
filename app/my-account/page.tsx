import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { AuthCheck } from '@/components';

const page = () => {
  return (
    <AuthCheck notAuthRedirectUrl="/" notAuthRedirect>
      <div>My Account</div>
    </AuthCheck>
  );
};

export default page;
