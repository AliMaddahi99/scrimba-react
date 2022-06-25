import React from 'react';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import data from "./data";


function App() {
	let cards = data.map(card => <Card key={card.id} card={card}/>)

	return (
		<div className="app">
			<Navbar />
			{cards}
		</div>
	);
}

export default App;
