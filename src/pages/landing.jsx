import { Link } from "react-router-dom";
import bg from "../assets/bg-1.jpg";
const LandingPage = () => {
  return (
    <>
      <div className=" bg-slate-200 min-h-screen py-14 flex items-center space-x-16 ">
        <div className="flex flex-col mx-8 ml-48 ">
          <h1 className="text-6xl font-bold mb-4 font-serif">Welcome to </h1>
          <h2 className=" text-3xl font-bold mb-4 font-serif">
            Movie Streamer
          </h2>
          <p className="text-lg  ">
            One of the best webpage through which one can access all the
          </p>
          <p className=" text-lg   ">
            information regarding any movie you want to watch with it's ratings
          </p>
          <p className="text-lg  ">
            Search and get movies as per your interests.
          </p>

          <span className=" btn pt-2">
            <Link to="/homepage">Get Started</Link>
          </span>
        </div>
        <div className="  w-1/3 ">
          <img src={bg} className=" h-96 rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
