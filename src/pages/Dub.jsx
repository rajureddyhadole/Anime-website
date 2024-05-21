import { Search } from "../components/Search";
import { MiniNavbar } from "../components/MiniNavbar";
import { PosterCard } from "../components/PosterCard";
import { Footer } from "../components/Footer";

export const Dub = () => {
    
  return (
		<>
		<Search/>
		<MiniNavbar/>
		<div className="w-[90%] mx-auto grid grid-cols-7 grid-rows-2">
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
			<PosterCard />
		</div>
		<Footer/>
		</>
	);
}