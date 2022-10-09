/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				oswald: ["Oswald", "sans-serif"],
				ubuntu: ["Ubuntu", "sans-serif"],
				openSans: ["Open Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
