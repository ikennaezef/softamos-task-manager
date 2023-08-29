import { AiOutlineCalendar, AiOutlineCheckCircle } from "react-icons/ai";
import { BiHourglass } from "react-icons/bi";
import { useApp } from "../context";

const Overview = () => {
	const { tasksList } = useApp();

	return (
		<section className="bg-bgLight dark:bg-bgDark py-6">
			<div className="max-w-7xl mx-auto px-2">
				<h2 className="text-2xl md:text-3xl text-primaryLight dark:text-primaryDark font-semibold">
					Overview
				</h2>
				<p className="text-secondaryLight dark:text-secondaryDark mb-4">
					Have an overview of all your tasks.
				</p>
				<div className="flex items-stretch md:items-center flex-wrap md:flex-nowrap gap-3 space-x-0 md:gap-0 md:space-x-6">
					<div className="flex flex-col items-start justify-between border border-gray-400 bg-pink-100 dark:bg-pink-400/40 rounded-xl shadow-md w-40 md:w-80 p-4">
						<span className="inline-block rounded bg-pink-300 dark:bg-pink-500/80 shadow-md mb-4 p-2">
							<AiOutlineCalendar size="1rem" />
						</span>
						<h4 className="text-base md:text-xl text-primaryLight dark:text-primaryDark font-bold mb-2">
							Total Tasks
						</h4>
						<h2 className="text-4xl text-primaryLight dark:text-primaryDark font-bold">
							{tasksList.length}
						</h2>
					</div>
					<div className="flex flex-col items-start justify-between border border-gray-400 bg-yellow-100 dark:bg-yellow-400/40 rounded-xl shadow-md w-40 md:w-80 p-4">
						<span className="inline-block rounded bg-yellow-300 dark:bg-yellow-500/80 shadow-md mb-4 p-2">
							<BiHourglass size="1rem" />
						</span>
						<h4 className="text-base md:text-xl text-primaryLight dark:text-primaryDark font-bold mb-2">
							Pending Tasks
						</h4>
						<h2 className="text-4xl text-primaryLight dark:text-primaryDark font-bold">
							{
								tasksList.filter((task: Task) => task.status == "Pending")
									.length
							}
						</h2>
					</div>
					<div className="flex flex-col items-start justify-between border border-gray-400 bg-green-100 dark:bg-green-400/40 rounded-xl shadow-md w-40 md:w-80 p-4">
						<span className="inline-block rounded bg-green-300 dark:bg-green-500/80 shadow-md mb-4 p-2">
							<AiOutlineCheckCircle size="1rem" />
						</span>
						<h4 className="text-base md:text-xl text-primaryLight dark:text-primaryDark font-bold mb-2">
							Completed Tasks
						</h4>
						<h2 className="text-4xl text-primaryLight dark:text-primaryDark font-bold">
							{tasksList.filter((task: Task) => task.status == "Done").length}
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Overview;
