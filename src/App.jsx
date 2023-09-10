import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
	const [list, setList] = useState([1, 2, 3, 4, 5]);

	const handleAddItem = () =>
		setList((prevList) => [
			...prevList,
			(prevList[prevList.length - 1]
				? prevList[prevList.length - 1]
				: 0) + 1,
		]);

	const handleRemoveItem = (id) =>
		setList((prevList) => prevList.filter((li) => li !== id));

	return (
		<div className='bg-neutral-900 text-white min-h-screen pt-10'>
			<h1 className='text-3xl text-center '>Hello There 👋</h1>
			<div className='mt-20 flex flex-col justify-center items-center'>
				<button
					className='text-xl border px-4 py-2 rounded-lg'
					onClick={handleAddItem}>
					Add
				</button>
				<ul className='w-1/3'>
					<AnimatePresence>
						{list.map((li) => (
							<motion.li
								key={li}
								className='w-full p-3 border-b flex justify-between items-center last:border-b-0'
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ layout: { type: 'spring' } }}>
								<span>Item: {li}</span>
								<button
									className='px-3 p-y2 border rounded'
									onClick={() => handleRemoveItem(li)}>
									&times;
								</button>
							</motion.li>
						))}
					</AnimatePresence>
				</ul>
			</div>
		</div>
	);
}

export default App;
