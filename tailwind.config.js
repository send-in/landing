/** @type {import("tailwindcss").Config} */

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			"purple-200": "#9180F1",
			"purple-100": "#DDD7FF",
			"blue-200": "#2862C2",
			"blue-100": "#4285F4",
			"charcoal-200": "#272727",
			"charcoal-100": "#2F2F2F",
			"grey-200": "#B7B7B7",
			"grey-100": "#F4F2F1",
			"grey-300": "#818181",
			"orange": "#EF613A",
			"bluewash": "#F5F9FF",
			"white": "#FFFFFF",
		},
		fontFamily: {
			mada: ["Mada", "sans-serif"],
		},
		screens: {
			small: { max: "1030px" },
			large: { min: "1030px" },
		},
		extend: {
			animation: {
				"scroll": "scroll 100s linear infinite",
				"spin-slow": "spin 3s linear infinite",
				"modal": "modalAnimation 0.1s ease-in-out",
			},
			visibility: ["group-hover"],
		},
	},
	plugins: [require("tailwindcss-inner-border")],
};
