import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.css';
import { Grid } from '@material-ui/core/';

import { courseData } from '../../data';

//have a sepate data file and dynamically render the cards + data

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		maxWidth: 345,
		margin: 19,
	},
	card__container: {
		display: 'flex',
		//margin: 200,
		//justifyContent: 'space-between',
	},

	media: {
		height: 140,
	},
});

export default function MediaCard() {
	const classes = useStyles();
	return (
		<div className={classes.card__container}>
			<Grid
				container
				// spacing={0}
				// direction="row"
				// justify="space-between"
				// alignItems="flex-start"
			>
				{courseData.map(function (info, i) {
					return (
						<div className={classes.root} key={info.id}>
							{/* <p>{info.id}</p> */}
							<Grid item md={12}>
								<Card>
									<CardActionArea>
										<CardMedia
											className={classes.media}
											image={info.image}
											title={info.name}
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												{info.name}
											</Typography>
											<Typography
												variant="body2"
												color="textSecondary"
												component="p">
												{info.info}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary">
											Share
										</Button>
										<Button size="small" color="primary">
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Grid>
						</div>
					);
				})}
			</Grid>
		</div>
	);
}
