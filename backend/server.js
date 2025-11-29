import express from 'express';

const app = express();

app.get('/api/jokes', (req, res) => {
	const jokes = [
		{
			categories: ['science'],
			id: 140,
			content:
				'Science Fact: Roundhouse kicks are comprised primarily of an element called Chucktanium.',
		},
		{
			categories: [],
			id: 456,
			content:
				'All science students maybe aware about the fact that picochuck is the unit of manliness in the International System of Units (SI). An average man measures about 0.00073 pc. Chuck Norris measures 39,372 petachucks.',
		},
		{
			categories: [],
			id: 1073,
			content:
				"The 7 wonders of the world were actually Chuck Norris' science fair projects. And Chuck Norris is the 8th wonder of the world.",
		},
		{
			categories: [],
			id: 1269,
			content:
				'Larry the Cable Guy was a nuclear science physics professor at MIT for only 3 seconds more after he called Chuck Norris\' mother a "slutty beatch of a crack whore".',
		},
	];
	res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`server at http://localhost:${port}`);
});
