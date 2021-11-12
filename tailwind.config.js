const firstColor = "#FF4C29FF";

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				"7xl": "5rem",
				"8xl": "6rem",
			},
			fontFamily: {
				montserrat: ["Montserrat"],
				"bebas-neue": ["Bebas neue"],
			},
			height: {
				"header-height": "4rem",
			},
			maxWidth: {
				"max-width-screen": "1200px",
			},
			outline: {
				"menu-btn": `thin solid ${firstColor}`,
			},
			inset: {
				"header-height": "4rem",
			},
			colors: {
				"first-color": "#FF4C29FF",
				"first-alpha-color": "#FF4C29C0",
				"second-color": "#082032FF",
				"second-alpha-color": "#082032C0",
				"third-color": "#334756FF",
				"third-alpha-color": "#334756C0",
				"white-color": "#fff",
				"gray-light-color": "#f3f3f3",
				"gray-color": "#ccc",
				"gray-dark-color": "#666",
				"black-color": "#000",
				"link-color": "#509ee3",
				"title-color": "#333",
				"text-color": "#222",
				"white-alpha-color": "#FFFFFF80",
				"black-alpha-color": "#00000080",
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ["active"],
			borderColor: ["active"],
		},
	},
	plugins: [],
	corePlugins: { preflight: false },
};
