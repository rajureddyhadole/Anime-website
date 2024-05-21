export const Footer = () => {

  return (
    <>
	<div className="flex justify-center mb-6 font-semibold text-slate-300">
		<button className="hover:text-slate-600">BACK TO TOP</button>
	</div>
    <hr className="max-w-4xl mx-auto mb-6 border-gray-400" />
			<div className="max-w-4xl mx-auto mb-10">
				<ul className="flex justify-center space-x-10 font-medium text-slate-600">
					<li>
						<a className="px-2 py-1 hover:text-slate-700 hover:text-lg" href="#">A-Z List</a>
					</li>
					<li>
						<a className="px-2 py-1 hover:text-slate-700 hover:text-lg" href="#">Recently Added</a>
					</li>
					<li>
						<a className="px-2 py-1 hover:text-slate-700 hover:text-lg" href="#">Upcoming</a>
					</li>
					<li>
						<a className="px-2 py-1 hover:text-slate-700 hover:text-lg" href="#">Most Watched</a>
					</li>
					<li>
						<a className="px-2 py-1 hover:text-slate-700 hover:text-lg" href="#">Request</a>
					</li>
					<li>
						<a className="px-2 py-1 hover:text-slate-700 hover:text-lg" href="#">FAQ</a>
					</li>
					<li>
						<a className="px-2 py-1 hover:text-slate-700 hover:text-lg" href="#">Contact</a>
					</li>
				</ul>
			</div>
    </>
  );
}