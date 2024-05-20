import { NavLink } from "react-router-dom";

export const Navbar = () => {

  return (
    <>
    <div className='flex items-center justify-between w-[92%] mx-auto text-xl'>
				<div className='p-4 text-6xl font-semibold'>
					Logo
				</div>
				<div>
					<ul className='flex items-center justify-center w-full h-full space-x-12' >
						<li>
							<a className='hover:text-green-400' href="#">Genres</a>
						</li>
						<li>
							<a className='hover:text-green-400' href="#">Types</a>
						</li>
						<li>
							<a className='hover:text-green-400' href="#">Updated</a>
						</li>
						<li>
							<a className='hover:text-green-400' href="#">Added</a>
						</li>
						<li>
							<a className='hover:text-green-400' href="#">Ongoing</a>
						</li>
						<li>
							<a className='hover:text-green-400' href="#">Upcoming</a>
						</li>
						<li>
							<a className='hover:text-green-400' href="#">Schedule</a>
						</li>
					</ul>
				</div>
				<div className='flex items-center p-6'>
					<img className='w-10 h-10 mr-2 rounded-full' src="./images/anime-pfp.jpg" alt="image" />
					<NavLink to="/signin"><button className='px-4 py-2 text-lg font-medium text-white bg-green-400 rounded-full shadow-md hover:bg-green-500 active:bg-green-600'>Sign In</button></NavLink>
				</div>
			</div>
    </>
  );
}