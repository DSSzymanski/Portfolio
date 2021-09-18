const js = {
	cName: 'js',
	text: 'Javascript'
}


const python = {
	cName: 'python',
	text: 'Python'
}

const react = {
	cName: 'react',
	text: 'React'
}
/*
const cSharp = {
	cName: 'cSharp',
	text: 'C#'
}
*/
const mini = {
	cName: 'mini',
	text: 'Mini'
}

export const CardItems = [
	{
		title: 'Sorting Visualizer',
		img: 'images/Sorting-Visualizer.png',
		blurb: 'A web based project displaying 5 sorting algorithms using SVG graphs.',
		path: 'https://github.com/DSSzymanski/Sorting-Visualizer',
		tags: [js]
	},
	{
		title: 'Countdown Webpage',
		img: 'images/Countdown-Timer.png',
		blurb: 'A webpage that shows a countdown until the next holiday using react components.',
		path: 'https://github.com/DSSzymanski/CountdownWebpage',
		tags: [react, js, mini]
	},
	{
		title: 'N-Queens Visualization',
		img: 'images/N-Queens-Visualization.png',
		blurb: 'N-Queens puzzle solver using a backtracking algorithm and displayed on a canvas.',
		path: 'https://github.com/DSSzymanski/N-Queens-Visualization',
		tags: [js]
	},
	{
		title: 'N-Queens',
		img: '/',
		blurb: 'Original N-Queens solving project. Utilizes python to display solutions to the N-Queens\
				on the command line.',
		path: 'https://github.com/DSSzymanski/N-Queens',
		tags: [python]
	}
];