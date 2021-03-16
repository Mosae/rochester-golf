import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import soldiers from './soldiersfield.jpg';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
			marginBottom: '6.25%',
		},
		media: {
			height: 2,
			paddingTop: '56.25%', // 16:9
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		avatar: {
			backgroundColor: red[500],
		},
	})
);

export default function Cards() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						S
					</Avatar>
				}
				// action={
				// 	<IconButton aria-label="settings">
				// 		<MoreVertIcon />
				// 	</IconButton>
				// }
				title="Soldier's Field Golf Club"
				subheader="Downtown Rochester"
			/>
			<CardMedia
				className={classes.media}
				image={soldiers}
				title="Soldier's Field"
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					Soldiers Field GC is a classic course located in the middle of
					downtown Rochester. Built in 1927 along the Zumbro River, this
					beautiful course features tree lined fairways, well bunkered greens,
					and challenging shots over the river. Measuring less than 6,000 yards,
					the golf course has proven time and time again that strategy and ball
					placement, and not just length, are requirements to scoring well on
					this challenging golf course.
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more">
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Details:</Typography>
					<Typography paragraph>
						Soldiers Field GC has hosted numerous State qualifying tournaments,
						junior championships, and the annual Rochester All-City Golf
						championship over the years. With some of the best designed greens
						in southern Minnesota and great course conditions, Soldiers Field GC
						is consistently ranked among the finest courses in the Rochester
						area.
					</Typography>
					<Typography paragraph>
						The golf course is open to the public as well as host to tournaments
						and leagues throughout the golf season.
					</Typography>
					<Typography paragraph>
						<strong>PGA Golf Professional: </strong>
						David Richardson
					</Typography>
					<Typography>
						<strong>Golf Course Superintendent: </strong> Mike Senjem
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
