import React from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { grey} from "@material-ui/core/colors";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = theme => ({
    root: {
        width: "100%",
        backgroundColor: grey,
    },
    grid: {
        flexGrow: 1,
    },
    highlight: {
        color: "blue",
    },
    header: {
        marginLeft: "5%",
        marginRight: "5%",
    },
    statement: {
        textAlign: "left",
        fontSize: "3em",
    },
    body: {
        marginTop: "10%",
        marginLeft: "5%",
        marginRight: "5%",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    card: {
        height: "100%",
    }
});

class Home extends React.Component {

    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
              <Paper className={classes.header} elevation={0}>
                <h1 className={classes.statement}>
                    Hello, we're <span className={classes.highlight}>Swelo!</span> We
                    are committed to <span className={classes.highlight}>reshaping the landscape</span> of professional swimming by
                    introducting <span className={classes.highlight}>betting</span> to the sport. We hope to shift the motivation
                    behind swimming to be rooted in <span className={classes.highlight}>extrinsic competition</span> rather than time standards.
                </h1>
              </Paper>
              <Paper className={classes.body} elevation={0}>
                <Grid container className={classes.grid} spacing={8} justify="center">
                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h3" component="h2">
                                    Research
                                </Typography>
                                <Typography variant="body" component="h2" align="left" color="textSecondary">
                                    Use our proprietary elo rating system to check out how your favorite swimmers match up to others in the competitive field.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h3" component="h2">
                                    Bet
                                </Typography>
                                <Typography variant="body" component="h2" align="left" color="textSecondary">
                                    Wager money on your favorite events for the chance to win!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h3" component="h2">
                                    Win
                                </Typography>
                                <Typography variant="body" component="h2" align="left" color="textSecondary">
                                    Win prizes and money for correctly predicting outcomes in your favorite ISL races!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
              </Paper>
            </div>
        );
    }
}

export default withStyles(useStyles)(Home);