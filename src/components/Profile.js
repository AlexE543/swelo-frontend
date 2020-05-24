import React from "react";
import { withStyles } from '@material-ui/core/styles';
import NavigationBar from './NavigationBar';

const useStyles = theme => ({
    root: {
        width: "100%",
        backgroundColor: "red",
        color: 'white',
        fontSize: "3em",
    }
});

class About extends React.Component {
    
    render () {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <NavigationBar></NavigationBar>
                <div>This will be a profile page with various personal information</div>
            </div>
        );
    }
}

export default withStyles(useStyles)(About);