import { useAuth, UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const handleHeaderButtonClick = async () => {
    if (!isSignedIn) {
      navigate("/sign-in");
      return;
    }
  };
  return (
    <div className=" flex justify-between items-center shadow-md p-5">
      <Link to={"/"}>
        <img src="/logo.svg" alt="logo" />
      </Link>
      <div onClick={handleHeaderButtonClick}>
        {isSignedIn ? <UserButton /> : <Button>Sign In</Button>}
      </div>
    </div>
  );
};

export default Header;
