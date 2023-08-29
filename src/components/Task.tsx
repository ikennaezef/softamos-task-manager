import { RiDeleteBin5Line } from "react-icons/ri";
import { useApp } from "../context";

type Props = {
	task: Task;
};

const Task = ({ task }: Props) => {
	const { deleteTask, changeStatus } = useApp();
	const handleDelete = () => {
		deleteTask(task.id);
	};

	return (
		<div className="border border-gray-200 dark:border-gray-600 rounded-lg shadow p-4">
			<div className="flex items-center justify-between">
				<div>
					<h3 className="text-xl text-primaryLight dark:text-primaryDark font-medium">
						{task.title}
					</h3>
					<p className="text-secondaryLight dark:text-secondaryDark text-sm">
						{task.date}
					</p>
				</div>
				<div className="flex items-center space-x-3">
					<button
						onClick={() => changeStatus(task)}
						className={`rounded-xl text-sm text-gray-700 dark:text-white py-1 px-4 ${
							task.status == "Pending"
								? "bg-yellow-400 dark:bg-yellow-500"
								: "bg-green-500"
						}`}>
						{task.status}
					</button>
					<button
						onClick={handleDelete}
						className="bg-red-100 dark:bg-red-200/20 rounded p-2">
						<RiDeleteBin5Line
							className="text-errorLight dark:text-errorDark"
							size="1rem"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Task;
