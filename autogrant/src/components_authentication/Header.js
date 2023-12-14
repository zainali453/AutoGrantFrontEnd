import { Link } from "react-router-dom";
import logo from "../assests/autograntlogo.png";

export default function Header({ heading, paragraph, linkName, linkUrl }) {
  return (
    <div className="mt-0">
      <div className="flex justify-center">
        <img alt="" className="h-18 w-25" src={logo}></img>
      </div>
      <h2
        className="text-center text-3xl font-extrabold "
        style={{
          color: "#FFF5E0",
        }}
      >
        {heading}
      </h2>
      <p
        className=" text-center text-sm text-gray-600 mt-5"
        style={{
          color: "#FFF5E0",
        }}
      >
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
