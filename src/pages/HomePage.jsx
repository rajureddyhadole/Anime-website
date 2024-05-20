import { NavLink } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";

function HomePage() {

	return (
		<div>
			<Search />
			<div className="flex justify-center px-4 py-2 mb-5 text-lg font-medium">
				<NavLink className="px-4 py-2 border-2 border-gray-600 rounded-full hover:text-white hover:bg-blue-500 hover:border-transparent active:bg-blue-600" to="/mainpage">Go to Home</NavLink>
			</div>
			<div className="max-w-3xl mx-auto mb-6">
				<span className="mb-4 text-lg font-semibold text-black">WATCH ANIME ONLINE</span>
				<p className="text-slate-500">AnimeSuge is a free streaming anime website that allows you to watch anime online in English subbed and dubbed. Join us and watch anime online for free with ease. Easy access and no registration is required. Our content is updated daily with fast streaming servers and great features that help you easily track and watch your favorite anime. We are confident AnimeSuge is the best free anime streaming site in the space that you can't simply miss!</p>
				<div className="flex w-full mt-4 space-x-8">
					<button className="px-4 py-2 font-medium border-2 border-blue-400 rounded-full hover:border-transparent active:bg-blue-600 hover:text-white hover:bg-blue-500">whatsapp</button>
					<button className="px-4 py-2 font-medium border-2 border-blue-400 rounded-full hover:border-transparent active:bg-blue-600 hover:text-white hover:bg-blue-500">FaceBook</button>
					<button className="px-4 py-2 font-medium border-2 border-blue-400 rounded-full hover:border-transparent active:bg-blue-600 hover:text-white hover:bg-blue-500">Youtube</button>
					<button className="px-4 py-2 font-medium border-2 border-blue-400 rounded-full hover:border-transparent active:bg-blue-600 hover:text-white hover:bg-blue-500">Twitter</button>
					<button className="px-4 py-2 font-medium border-2 border-blue-400 rounded-full hover:border-transparent active:bg-blue-600 hover:text-white hover:bg-blue-500">Insta</button>
				</div>
			</div>
			<div className="flex justify-center mb-6 font-semibold text-slate-300">
				<button className="hover:text-slate-600">BACK TO TOP</button>
			</div>
			<Footer/>
		</div>
	);
}

export default HomePage;