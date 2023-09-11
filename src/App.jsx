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

				<div className='w-full flex justify-evenly items-start'>
					<ul className='w-1/3 mt-10 border p-3 rounded overflow-hidden'>
						<AnimatePresence>
							{list.map((li) => (
								<motion.li
									key={li}
									className=' border-b last:border-b-0'
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: 'auto' }}
									exit={{ opacity: 0, height: 0 }}
									transition={{
										opacity: { duration: 0.3 },
										height: { duration: 0.6 },
									}}>
									<div className='flex px-5 py-2 justify-between items-center'>
										<span>FIasdfjlk{li}</span>
										<button
											className='px-2 py-1 border rounded-md'
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

					{/* <motion.ul className='w-1/3'>
						<AnimatePresence>
							{list.map((li, index) => (
								<motion.li
									key={li}
									className='w-full h-30 overflow-hidden'
									layout
									initial={{
										y: -100,
										opacity: 0,
										marginTop: 0,
									}}
									animate={{
										y: 0,
										opacity: 1,
										marginTop: '1.4rem',
										transition: {
											duration: 0.6,
											delay: 0.8 * index,
										},
									}}
									exit={{
										height: 0,
										opacity: 0,
										marginTop: 0,
									}}
									transition={{
										duration: 0.6,
									}}>
									<div className='h-full p-2 flex items-center border rounded'>
										<motion.div
											className='w-1/5 h-16 flex justify-center items-center border rounded'
											exit={{ height: 0 }}
											transition={{ duration: 0.6 }}>
											Img
										</motion.div>
										<div className='ml-5'>
											<h1 className='text-xl '>
												Item: {li}
											</h1>
											<p className='text-sm'>5 Start</p>
										</div>

										<button
											className='border px-4 py-1 ml-auto rounded-full'
											onClick={() =>
												handleRemoveItem(li)
											}>
											Buy
										</button>
									</div>
								</motion.li>
							))}
						</AnimatePresence>
					</motion.ul> */}
				</div>
			</div>
		</div>
	);
}

export default App;
