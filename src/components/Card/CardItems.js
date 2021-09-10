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

const cSharp = {
	cName: 'cSharp',
	text: 'C#'
}

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
		title: 'test',
		img: '',
		path: '/',
		tags: [js, python, react, cSharp, mini]
	},
	{
		title: 'N-Queens Visualization',
		img: 'images/N-Queens-Visualization.png',
		blurb: 'N-Queens puzzle solver using a backtracking algorithm and displayed on a canvas.',
		path: 'https://github.com/DSSzymanski/N-Queens-Visualization',
		tags: [js]
	}
];