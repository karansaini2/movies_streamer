import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white h-12 items-center">
      <nav className="flex  justify-evenly items-center h-12  ">
        <h2 className="text-3xl mx-4 font-serif">OMDB</h2>
        <ul className="flex space-x-5 mr-8 ">
          <li className=" li ">
            <Link to="/">Overview</Link>
          </li>
          <li className=" li ">
            <Link to="/homepage">Home</Link>
          </li>
          <li className="li ">
            <Link to="/favourite">Favourite</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
