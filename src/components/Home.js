import React from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NavigationBar from "./NavigationBar";
import logo from '../images/logo.png';



const useStyles = theme => ({
    root: {
        width: "100%",
    },
    grid: {
        flexGrow: 1,
    },
    highlight: {
        color: "#01579b",
    },
    header: {
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "transparent",
    },
    statement: {
        textAlign: "center",
        fontSize: "2.5vw",
        color: "black",
    },
    body: {
        marginTop: "3%",
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "transparent",
    },
    title: {
        color: "#01579b",
        fontSize: "2vw",
    },
    info: {
        fontSize: "1.5vw",
        color: "black"
    },
    card: {
        height: "100%",
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderColor: "#01579b",
    },
    logo: {
        maxWidth: "20%",
        marginTop: "2%",
    }
});

class Home extends React.Component {

    render () {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <NavigationBar></NavigationBar>
                <img className={classes.logo} alt="logo" src={logo}/>
              <Paper className={classes.header} elevation={0}>
                <h1 className={classes.statement}>
                    Hello, we're <span className={classes.highlight}>Swelo!</span> We
                    are committed to providing a new and <span className={classes.highlight}>exciting twist</span> to the sport of swimming.
                    By implementing state of the art <span className={classes.highlight}>sports analytics</span> tools coupled with 
                    <span className={classes.highlight}>competitive betting</span> markets, we hope to 
                    provide an outlet for fans to have a more <span className={classes.highlight}>interactive and exhilirating</span> viewing experience while wagering on their favorite athletes.
                </h1>
              </Paper>
              <Paper className={classes.body} elevation={0}>
                <Grid container className={classes.grid} spacing={8} justify="center">
                    <Grid item xs={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h3" component="h2" className={classes.title}>
                                    Explore
                                </Typography>
                                <Typography variant="h6" component="h6" align="center" className={classes.info}>
                                    Use our proprietary elo rating system to check out how your favorite swimmers match up to others in the competitive field and try
                                    try out our other anayltics tools.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                    <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h3" component="h2" className={classes.title}>
                                    Bet
                                </Typography>
                                <Typography variant="h6" component="h6" align="center" className={classes.info}>
                                    Wager money on your favorite events and test your swimming knowledge for the chance to win big!
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