import React from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NavigationBar from "./NavigationBar";
import Background from "../images/background.jpg"


const useStyles = theme => ({
    root: {
        width: "100%",
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    grid: {
        flexGrow: 1,
    },
    highlight: {
        color: "gold",
    },
    header: {
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "transparent",
    },
    statement: {
        textAlign: "left",
        fontSize: "3vw",
        color: "white",
    },
    body: {
        marginTop: "15%",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "transparent",
    },
    title: {
        color: "gold",
        fontSize: "2vw",
    },
    info: {
        color: "gray",
        fontSize: "1.5vw",
    },
    card: {
        height: "100%",
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderColor: "gold",
    },
    blur: {
        backdropFilter: "blur(5px) brightness(60%)",
    }
});

class Home extends React.Component {

    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.blur}>
                <NavigationBar></NavigationBar>
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
                                <Typography variant="h3" component="h2" className={classes.title}>
                                    Research
                                </Typography>
                                <Typography variant="h6" component="h6" align="left" className={classes.info}>
                                    Use our proprietary elo rating system to check out how your favorite swimmers match up to others in the competitive field.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h3" component="h2" className={classes.title}>
                                    Bet
                                </Typography>
                                <Typography variant="h6" component="h6" align="left" className={classes.info}>
                                    Wager money on your favorite events for the chance to win!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h3" component="h2" className={classes.title}>
                                    Win
                                </Typography>
                                <Typography variant="h6" component="h6" align="left" className={classes.info}>
                                    Win prizes and money for correctly predicting outcomes in your favorite ISL races!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
              </Paper>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(Home);