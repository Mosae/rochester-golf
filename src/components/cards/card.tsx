import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Grid } from '@material-ui/core/';

import { courseData } from '../../data';

//have a sepate data file and dynamically render the cards + data

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

export default function MediaCard() {
	const classes = useStyles();
	return (
		<Grid
			container
			// spacing={4}
			direction="row"
			justify="flex-start"
			alignItems="flex-start">
			<div className={classes.root}>
				{courseData.map(function (info, i) {
					return (
						<div>
							<p>{info.id}</p>
							<Grid item xs={2} md={3} lg={12} key={info.id}>
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
			</div>
		</Grid>
	);
}
