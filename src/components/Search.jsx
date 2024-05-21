export const Search = () => {

  return (
    <>
    <img className='w-[90%] h-60 mx-auto object-cover' src="./images/goku.jpg" alt="itachi" />
			<div className='flex items-center mx-auto w-[50%] h-16 border bg-white rounded-md mb-10 shadow-md'>
				<img className='w-12 h-12 pl-4' src="./magnifying-glass-solid.svg" alt="" />
				<input className='w-[80%] h-12 border ml-4 pl-4 font-semibold border-none focus:outline-none' type="text" placeholder='Search'/>
				<button className='px-4 py-2 mr-4 text-lg font-medium text-white bg-green-400 border-none rounded-md shadow-md hover:bg-green-500 active:bg-green-600' >Filter</button>
			</div>
    </>
  );
}