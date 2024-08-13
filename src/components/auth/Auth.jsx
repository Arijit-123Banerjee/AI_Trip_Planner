import { SignIn } from "@clerk/clerk-react";

const AuthPage = () => {
  return (
    <div className="h-screen flex flex-col sm:flex-row justify-center items-center bg-white">
      <div className="flex justify-center items-center sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <SignIn />
      </div>
    </div>
  );
};

export default AuthPage;
