import { AuthCheck, UserNav, UserWelcomeArea } from '@/components';

const layout = ({ children }: any) => {
  return (
    <>
      <AuthCheck notAuthRedirectUrl="/login" notAuthRedirect>
        <div className="w-screen px-4">
          {/* User Welcome Bar */}
          <UserWelcomeArea />
          {/* Menu Bar */}
          <div className="w-full h-fit bg-gray-100 rounded px-4 py-2 shadow-md mb-2">
            <UserNav />
          </div>
          {children}
        </div>
      </AuthCheck>
    </>
  );
};

export default layout;
