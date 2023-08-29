import AddTaskModal from "./components/AddTaskModal";
import ChangeStatusModal from "./components/ChangeStatusModal";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Tabs from "./components/Tabs";
import { useApp } from "./context";

function App() {
	const { addModal, statusModal, selectedTask, mode } = useApp();
	return (
		<main className={`relative ${mode === "dark" ? "dark" : ""}`}>
			<div className="bg-bgLight dark:bg-slate-900 min-h-screen">
				<Navbar />
				<Overview />
				<Tabs />
				{addModal && <AddTaskModal />}
				{statusModal && <ChangeStatusModal task={selectedTask} />}
			</div>
		</main>
	);
}

export default App;
