import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class MarketItem extends React.Component {

    render() {
        const classes = this.props;
        return (
            <div className={classes.root}>
                <Link style={{ textDecoration: 'none' }} to={{
                    pathname: '/market',
                    state: {
                        eventName: this.props.eventName,
                    }
                }}>
                    <Card>
                        <CardActionArea>
                            <CardContent align="center" style={{backgroundColor: "#00548a", color: "white"}}>
                                <Typography>{this.props.eventName}</Typography>
                                <div style={{width: "128px", height: "96px", marginTop: "5%", backgroundColor: "#6be3ff", color: "black"}}>
                                    Insert Event Logo Here
                                </div>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </div>
        );
    }
}

export default withStyles(useStyles)(MarketItem);