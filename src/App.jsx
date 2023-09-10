import { useState } from 'react';

function App() {
	const [list, setList] = useState([1, 2, 3, 4, 5]);

	return (
		<div className='bg-neutral-900 text-white min-h-screen pt-10'>
			<h1 className='text-3xl text-center '>Hello There 👋</h1>
			<div className='mt-20 flex flex-col justify-center items-center'>
        <button className='text-xl border px-4 py-2 rounded-lg'>Add</button>
				<ul className='w-1/3'>
					{list.map((li) => (
						<li key={li} className='w-full p-3 border-b flex justify-between items-center'>
							<span>Item: {li}</span>
							<button className='px-3 p-y2 border rounded'>&times;</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
