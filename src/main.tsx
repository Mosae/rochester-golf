import React from 'react';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import MediaCard from './components/cards/card';
import Ft from './components/footer/Footer';

function main() {
	return (
		<div>
			<Navbar />
			<Header />
			<MediaCard />
			<Ft />
		</div>
	);
}

export default main;
