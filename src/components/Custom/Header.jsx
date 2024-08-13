import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className=" flex justify-between items-center shadow-md p-5">
      <img src="/logo.svg" alt="logo" />
      <Button>Sign In</Button>
    </div>
  );
};

export default Header;
