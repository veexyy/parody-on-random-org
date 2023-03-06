import { Link } from "react-router-dom";
import Header from "./Header";

function Error() {
  return (
    <>
      <Header />
      <h1 className="error title">404</h1>
      <Link to="/">
        <div className="error button">RETURN TO MAIN</div>
      </Link>
    </>
  );
}

export default Error;
