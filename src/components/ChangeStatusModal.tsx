import { useState } from "react";
import { useApp } from "../context";

type Props = {
	task: Task;
};

const ChangeStatusModal = ({ task }: Props) => {
	const [selectedStatus, setSelectedStatus] = useState<"Pending" | "Done">(
		task.status
	);
	const { setStatusModal, changeTaskStatus } = useApp();

	const closeModal = () => {
		setStatusModal(false);
	};

	const saveTask = () => {
		changeTaskStatus(task.id, selectedStatus);
		closeModal();
	};
	return (
		<div className="fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-slate-950/80 p-12">
			<div className="bg-bgLight dark:bg-slate-800 rounded-md w-[30rem] p-4 md:p-8">
				<h3 className="text-2xl text-primaryLight dark:text-primaryDark font-bold mb-4">
					Change Task Status
				</h3>
				<p className="font-medium text-primaryLight dark:text-primaryDark mb-2">
					{task.title}
				</p>
				<div className="flex items-center justify-start space-x-5 mb-6">
					<button
						onClick={() => setSelectedStatus("Pending")}
						className={`rounded-2xl text-sm text-gray-700 dark:text-gray-600 py-2 px-6 ${
							selectedStatus == "Pending"
								? "bg-yellow-400"
								: "border border-gray-300 dark:border-gray-600"
						}`}>
						Pending
					</button>
					<button
						onClick={() => setSelectedStatus("Done")}
						className={`rounded-2xl text-sm text-gray-700 dark:text-gray-600 py-2 px-6 ${
							selectedStatus == "Done"
								? "bg-green-500 text-white"
								: "border border-gray-300 dark:border-gray-600"
						}`}>
						Done
					</button>
				</div>
				<div className="flex items-center space-x-4 mt-6">
					<button
						onClick={closeModal}
						className="rounded-md border border-gray-300 dark:border-gray-700 text-primaryLight dark:text-primaryDark py-2 px-4">
						Cancel
					</button>
					<button
						onClick={saveTask}
						className="bg-accentLight dark:bg-accentDark text-white rounded-md py-2 px-4">
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChangeStatusModal;
