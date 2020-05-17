import React from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { grey} from "@material-ui/core/colors";
import Grid from '@material-ui/core/Grid';
import alex from '../images/alex.jpg';
import brian from '../images/brian.jpg';
import NavigationBar from './NavigationBar';

const useStyles = theme => ({
    root: {
        width: "100%",
        backgroundColor: "#014664",
    },
    highlight: {
        color: "gold",
    },
    header: {
        marginLeft: "5%",
        marginRight: "5%",
        backgroundColor: "#014664",
        color: "white",
    },
    statement: {
        textAlign: "left",
        fontSize: "3em",
        backgroundColor: "#014664",
        color: "white",
    }, 
    item: {
        backgroundColor: "#014664",
        color: "white"
    }
});

class About extends React.Component {
    
    render () {
        const {classes} = this.props
        return (
            <div className={classes.root}>
              <NavigationBar></NavigationBar>
              < Paper className={classes.header} elevation={0}>
                    <h1>We Are <span className={classes.highlight}>Swelo</span> </h1>
                    <h2>Here is some information about us...</h2>
                </Paper>
                <Paper className={classes.body} elevation={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} className={classes.item}>
                            <img src={alex}></img>
                            <h3><strong>About Alex</strong></h3>

                        </Grid>
                        <Grid item xs={6} className={classes.item}>
                            <img src={brian}></img>
                            <h3><strong>About Brian</strong></h3>
                        </Grid>
                    </Grid>
              </Paper>
            </div>
        );
    }
}

export default withStyles(useStyles)(About);