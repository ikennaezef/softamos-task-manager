import { GoTasklist } from "react-icons/go";
import { useApp } from "../context";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const Navbar = () => {
	const { setAddModal, mode, toggleMode } = useApp();

	const addTask = () => {
		setAddModal(true);
	};

	return (
		<nav className="border-b border-b-gray-400 dark:border-b-gray-600 bg-bgLight dark:bg-bgDark transition-all duration-300">
			<div className="flex items-center justify-between max-w-7xl mx-auto py-4 px-2">
				<div className="flex items-center space-x-2">
					<GoTasklist
						size="1.6rem"
						className="text-accentLight dark:text-accentDark"
					/>
					<h2 className="text-2xl md:text-4xl font-bold text-primaryLight dark:text-primaryDark">
						Taskly
					</h2>
				</div>
				<div className="flex items-center space-x-2">
					<button
						onClick={toggleMode}
						className="border border-gray-300 dark:border-gray-600 rounded text-primaryLight dark:text-primaryDark shadow p-2">
						{mode == "light" ? <BiSolidMoon /> : <BiSolidSun />}
					</button>

					<button
						onClick={addTask}
						className="bg-accentLight dark:bg-accentDark text-white text-sm md:text-base rounded-md py-2 px-4">
						Add Task
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
