import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
	const [list, setList] = useState([1, 2, 3]);

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
				<div className='w-full flex justify-evenly'>
					<ul className='w-1/3 mt-10 px-5 py-3 border overflow-hidden rounded'>
						<AnimatePresence>
							{list.map((li) => (
								<motion.li
									key={li}
									className='border-b last:border-b-0'
									layout
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{ duration: 0.4 }}>
									<div className='w-full p-3 flex justify-between items-center'>
										<span>Item: {li}</span>
										<button
											className='border px-2 py-1'
											onClick={() =>
												handleRemoveItem(li)
											}>
											&times;
										</button>
									</div>
								</motion.li>
							))}
						</AnimatePresence>
					</ul>
					<ul className='w-1/3 border px-5 py-3 mt-10 rounded'>
						<AnimatePresence>
							{list.map((li) => (
								<motion.li
									key={li}
									className='border-b last:border-b-0'
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}>
									<div className='p-3 flex justify-between items-center'>
										<span>Item: {li}</span>
										<button
											className='border px-2 py-1'
											onClick={() =>
												handleRemoveItem(li)
											}>
											&times;
										</button>
									</div>
								</motion.li>
							))}
						</AnimatePresence>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
