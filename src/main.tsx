import React from 'react';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import MediaCard from './components/cards/card';
import Ft from './components/footer/Footer';
import { Grid } from '@material-ui/core';
// import Test from './components/cards/test';
function main() {
	return (
		<div>
			<Navbar />
			<Header />
			<Grid>
				<MediaCard />
			</Grid>

			<Ft />
		</div>
	);
}

export default main;
