import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import soldiers from './soldiersfield.jpg';
//have a sepate data file and dynamically render the cards + data

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

export default function MediaCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={soldiers}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Soldier's Field
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Soldiers Field GC is a classic course located in the middle of
						downtown Rochester. Built in 1927 along the Zumbro River, this
						beautiful course features tree lined fairways, well bunkered greens,
						and challenging shots over the river. Measuring less than 6,000
						yards, the golf course has proven time and time again that strategy
						and ball placement, and not just length, are requirements to scoring
						well on this challenging golf course.
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
	);
}
