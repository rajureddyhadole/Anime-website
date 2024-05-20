import { NavLink } from "react-router-dom";

export const MiniNavbar = () => {

  return (
    <>
    <div className="flex w-[90%] text-lg font-medium text-black justify-between mx-auto">
      <ul className="flex space-x-8">
      <p>Recently Updated</p>
        <li>
          <NavLink to="/all">All</NavLink>
        </li>
        <li>
          <NavLink to="/sub">Sub</NavLink>
        </li>
        <li>
          <NavLink to="/dub">Dub</NavLink>
        </li>
        <li>
          <NavLink to="/chinese">Chinese</NavLink>
        </li>
        <li>
          <NavLink to="/trending">Trending</NavLink>
        </li>
      </ul>
      <div>
        <button className="px-3 py-1 mr-2 text-white bg-green-400 rounded-full shadow-md hover:bg-green-500 active:bg-green-600">Prev</button>
        <button className="px-3 py-1 text-white bg-green-400 rounded-full shadow-md hover:bg-green-500 active:bg-green-600">Next</button>
      </div>
    </div>
    </>
  );
}