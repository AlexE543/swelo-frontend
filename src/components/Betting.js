import React from "react";
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { grey} from "@material-ui/core/colors";

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
              <Paper className={classes.header} elevation={0}>
                <h1 className={classes.statement}>
                    Hello, we're <span className={classes.highlight}>Swelo!</span> We
                    are committed to <span className={classes.highlight}>reshaping the landscape</span> of professional swimming by
                    introducting <span className={classes.highlight}>betting</span> to the sport. We hope to shift the motivation
                    behind swimming to be rooted in <span className={classes.highlight}>extrinsic competition</span> rather than time standards.
                </h1>
              </Paper>
              <Paper className={classes.body} elevation={0}>
                <p>
                    Betting Information
                </p>
              </Paper>
            </div>
        );
    }
}

export default withStyles(useStyles)(About);