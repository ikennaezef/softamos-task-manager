import { useState } from "react";
import { useApp } from "../context";
import { generateId } from "../utils/generateId";

const AddTaskModal = () => {
	const { setAddModal, setTasksList } = useApp();
	const [error, setError] = useState("");
	const [title, setTitle] = useState<string>("");
	const [date, setDate] = useState<string>("");

	const closeModal = () => {
		setAddModal(false);
	};

	const saveTask = () => {
		if (title == "" || date == "") {
			return setError("All fields are required!");
		}
		setTasksList((prevValue: any) => {
			return [
				...prevValue,
				{ id: generateId(), title, date, status: "Pending" },
			];
		});
		closeModal();
	};

	return (
		<div className="fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center bg-slate-950/80 p-12">
			<div className="bg-bgLight dark:bg-slate-800 rounded-md w-[30rem] p-4 md:p-8">
				<h3 className="text-2xl text-primaryLight dark:text-primaryDark font-bold mb-4">
					Add a Task
				</h3>
				{error && (
					<p className="text-errorLight dark:text-errorDark my-2">{error}</p>
				)}
				<div>
					<div className="flex flex-col space-y-2 mb-4">
						<label className="text-sm text-primaryLight dark:text-primaryDark font-semibold">
							Title
						</label>
						<input
							type="text"
							placeholder="Task Title..."
							value={title}
							onChange={(e) => {
								setTitle(e.target.value);
							}}
							className="h-[40px] text-primaryLight dark:text-primaryDark border border-gray-500 dark:border-gray-500 bg-accentLight/10 dark:bg-accentDark/10 rounded p-2"
						/>
					</div>
					<div className="flex flex-col space-y-2">
						<label className="text-sm text-primaryLight dark:text-primaryDark font-semibold">
							Due Date
						</label>
						<input
							type="date"
							placeholder="Task Title..."
							value={date}
							onChange={(e) => {
								setDate(e.target.value);
							}}
							className="h-[40px] text-primaryLight dark:text-primaryDark border border-gray-500 dark:border-gray-500 bg-accentLight/10 dark:bg-accentDark/10 rounded p-2"
						/>
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
		</div>
	);
};

export default AddTaskModal;
