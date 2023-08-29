import { useState, createContext, useContext } from "react";

const AppContext = createContext<any>(null);

export const useApp = () => {
	return useContext(AppContext);
};

type WrapperProps = {
	children: React.ReactElement;
};

export const ContextWrapper = ({ children }: WrapperProps) => {
	const [addModal, setAddModal] = useState<boolean>(false);
	const [statusModal, setStatusModal] = useState<boolean>(false);
	const [tasksList, setTasksList] = useState<Task[]>([]);
	const [mode, setMode] = useState<"light" | "dark">("light");
	const [selectedTask, setSelectedTask] = useState<Task>();

	const toggleMode = () => {
		if (mode == "light") {
			setMode("dark");
		} else {
			setMode("light");
		}
	};

	const changeStatus = (task: Task) => {
		setSelectedTask(task);
		setStatusModal(true);
	};

	const deleteTask = (id: string) => {
		setTasksList(tasksList.filter((task) => task.id != id));
	};

	const changeTaskStatus = (taskId: string, status: "Pending" | "Done") => {
		setTasksList((prevValues) => {
			return prevValues.map((task) => {
				if (task.id == taskId) {
					return { ...task, status };
				} else return task;
			});
		});
	};

	const values = {
		tasksList,
		setTasksList,
		addModal,
		setAddModal,
		statusModal,
		setStatusModal,
		mode,
		toggleMode,
		selectedTask,
		changeStatus,
		deleteTask,
		changeTaskStatus,
	};

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
