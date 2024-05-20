export const Search = () => {

  return (
    <>
    <img className='w-[92%] h-60 mx-auto object-cover' src="./images/goku.jpg" alt="itachi" />
			<div className='flex items-center mx-auto w-[50%] h-16 border bg-white rounded-md mb-10'>
				<img className='w-12 h-12 pl-4' src="./magnifying-glass-solid.svg" alt="" />
				<input className='w-[80%] h-10 border ml-4 pl-4 font-semibold border-none ' type="text" placeholder='Search'/>
				<button className='px-4 py-2 mr-4 text-lg text-white bg-red-500 rounded-sm hover:bg-red-400' >Filter</button>
			</div>
    </>
  );
}