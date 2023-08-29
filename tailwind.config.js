/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accentLight: "#eb7b26",
				accentDark: "#e78840",
				bgLight: "#f1f1f1",
				bgDark: "#0f172ace",
				primaryLight: "#020617",
				primaryDark: "#f5f5f5",
				secondaryLight: "#475569",
				secondaryDark: "#94a3b8",
				successLight: "#059669",
				successDark: "#10b981",
				errorLight: "#e11d48",
				errorDark: "#f43f5e",
			},
		},
	},
	plugins: [],
};
