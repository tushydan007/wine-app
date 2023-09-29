import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-2 shadow-lg h-16 flex items-center px-20">
      <ul className="flex gap-10 font-bold cursor-pointer">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
