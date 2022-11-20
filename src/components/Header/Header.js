import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  //This is done  by code1
  return (
    <div className="header">
      <Link to="/" className="title">
        Intuitive Quiz Hub
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
