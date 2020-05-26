import React from "react";
import { withStyles } from '@material-ui/core/styles';
import NavigationBar from './NavigationBar';
import BettingHub from './BettingHub';

const useStyles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        width: "50%",
        textAlign: "left",
    },
    head: {
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "2%",
        color: "black",
    },
    body: {
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "2%",
        outlineStyle: "solid",
        outlineColor: "rgb(0, 84, 138)",
    },
    title: {
        width: "100%",
        textAlign: "center",
        marginBottom: "1%",
    }, 
    buy: {
        marginLeft: "1%",
        backgroundColor: "rgb(0, 84, 138)",
        color: "white",
    },
    first: {
        backgroundColor: "white",
        borderBottom: "4px solid rgba(0, 84, 138, .8)"
    },
    panel: {
        border: "1px solid rgba(0, 84, 138, .2)",
    },
    hub: {
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "5%",
        marginBotom: "5%",
    }
});

class Betting extends React.Component {
    render () {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <NavigationBar></NavigationBar>
                <h1>{}</h1>
                <div className={classes.hub}>
                    <BettingHub></BettingHub>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(Betting);