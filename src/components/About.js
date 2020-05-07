import React from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { grey} from "@material-ui/core/colors";
import Grid from '@material-ui/core/Grid';
import alex from '../images/alex.jpg';
import brian from '../images/brian.jpg';

const useStyles = theme => ({
    root: {
        width: "100%",
        backgroundColor: grey,
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
    }
});

class About extends React.Component {
    
    render () {
        const {classes} = this.props
        return (
            <div className={classes.root}>
              < Paper className={classes.header} elevation={0}>
                    <h1>We Are <span className={classes.highlight}>Swelo</span> </h1>
                    <h2>Here is some information about us...</h2>
                </Paper>
                <Paper className={classes.body} elevation={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img src={alex}></img>
                            <h3><strong>About Alex</strong></h3>

                        </Grid>
                        <Grid item xs={6}>
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