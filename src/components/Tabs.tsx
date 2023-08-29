import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useApp } from "../context";
import Task from "./Task";

const tabsContent = [
	{
		id: 1,
		title: "All",
	},
	{
		id: 2,
		title: "Pending",
	},
	{
		id: 3,
		title: "Completed",
	},
];

const Tabs = () => {
	const { tasksList } = useApp();
	const [selectedTab, setSelectedTab] = useState(1);
	const [tabContent, setTabContent] = useState<Task[]>(tasksList);

	useEffect(() => {
		let content;
		switch (selectedTab) {
			case 1:
				setTabContent(tasksList);
				break;
			case 2:
				content = tasksList.filter((task: Task) => task.status === "Pending");
				setTabContent(content);
				break;
			case 3:
				content = tasksList.filter((task: Task) => task.status === "Done");
				setTabContent(content);
				break;
			default:
				break;
		}
	}, [selectedTab, tasksList]);

	return (
		<section className="bg-bgLight dark:bg-bgDark transition-all duration-300 py-4">
			<div className="max-w-7xl mx-auto px-2">
				<div className="flex w-full border-b border-b-gray-300 dark:border-b-gray-600">
					{tabsContent.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setSelectedTab(tab.id)}
							className={`relative w-full hover:bg-accentLight/20 py-2 transition-all duration-500 ${
								tab.id === selectedTab
									? "font-semibold text-accentLight dark:text-accentDark"
									: "text-primaryLight dark:text-primaryDark"
							}`}>
							{tab.title}
							{tab.id === selectedTab ? (
								<motion.div
									className="absolute bottom-0 left-0 right-0 w-full h-[2px] bg-accentLight dark:bg-accentDark"
									layoutId="underline"
								/>
							) : null}
						</button>
					))}
				</div>
				<div className="my-8">
					<AnimatePresence mode="wait">
						<motion.div
							key={selectedTab}
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -10, opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="">
							<div className="flex flex-col space-y-2 pt-6">
								{tabContent.map((task: Task) => (
									<Task key={task.id} task={task} />
								))}
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Tabs;
