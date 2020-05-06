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

class Home extends React.Component {

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Paper>
            </div>
        );
    }
}

export default withStyles(useStyles)(Home);