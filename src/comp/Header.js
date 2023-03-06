import { Link } from "react-router-dom";
import logo from "./pancake-svgrepo-com.svg";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="" width="32px" height="32px" center />
        </Link>
      </header>
    </>
  );
}

export default Header;
