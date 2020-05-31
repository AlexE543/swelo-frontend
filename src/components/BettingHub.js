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
            events: ["Men's 100m Butterfly", "Women's 100m Butterfly", "Men's 200m Freestyle", "Women's 200m Freestyle", "Men's 100m Breaststroke",
                    "Women's 100m Breaststroke"],
        }
    }

    render() {
        const classes = this.props;
        const events = this.state.events.map((event) => {
            return (
                <Grid item xs={12} md={6} lg={4} key={event}>
                    <MarketItem eventName={event}></MarketItem>
                </Grid>
            );
        })
        return (
            <div className={classes.root}>
                <div className={classes.title}>
                    <h1>Welcome to the Betting Hub</h1>
                </div>
                <Grid container spacing={3}>
                    {events}
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(BettingHub);