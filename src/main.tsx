import React from 'react';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Cards from './components/cards/card';
import Ft from './components/footer/Footer';
import { Grid } from '@material-ui/core';

function main() {
	return (
		<div>
			<Navbar />
			<Header />
			<Grid container>
				<Grid item xs={12} md={4} lg={4}>
					<Cards />
				</Grid>
				<Grid item xs={12} md={4} lg={4}>
					<Cards />
				</Grid>
				<Grid item xs={12} md={4} lg={4}>
					<Cards />
				</Grid>
			</Grid>
			<Ft />
		</div>
	);
}

export default main;
