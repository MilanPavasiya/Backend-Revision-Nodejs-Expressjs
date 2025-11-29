import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
	const [jokes, setJokes] = useState([]);

	useEffect(() => {
		axios
			.get('/api/jokes')
			.then((res) => setJokes(res.data))
			.catch((error) => {
				console.error('Error fetching jokes:', error);
			});
	}, []);

	return (
		<>
			<h1>Jokes: {jokes.length}</h1>
			{jokes.map((joke, index) => (
				<div key={joke.id}>
					<h3>{joke.title}</h3>
					{joke.content}
				</div>
			))}
		</>
	);
}

export default App;
