import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MarketItem from './MarketItem';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        border: "3px solid black",
    }
});

class BettingHub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            meet: "",
            events: [],
        }
    }

    render() {
        const classes = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.title}>
                    <h1>Welcome to the Betting Hub</h1>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <MarketItem eventName="Mens 100M Butterfly"></MarketItem>
                    </Grid>
                    <Grid item xs={4}>
                        <MarketItem eventName="Womens 100M Butterfly"></MarketItem>
                    </Grid>
                    <Grid item xs={4}>
                        <MarketItem eventName="Mens 200M Freestyle"></MarketItem>
                    </Grid>
                    <Grid item xs={4}>
                        <MarketItem eventName="Womens 200M Freestyle"></MarketItem>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(BettingHub);