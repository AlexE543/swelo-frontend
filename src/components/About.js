import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import alex from '../images/alex.jpg';
import brian from '../images/brian.jpg';
import NavigationBar from './NavigationBar';
import logo from '../images/small_logo.png';

const useStyles = theme => ({
    root: {
        width: "100%",
    },
    highlight: {
        color: "#01579b",
    },
    header: {
        marginLeft: "5%",
        marginRight: "5%",
    },
    item: {
    },
    title: {
        fontSize: "3.5vw",
    },
    subtitle: {
        fontSize: "2.5vw",
        textDecorationLine: "underline"
    },
    body: {
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "2%",
        marginBottom: "2%",
        fontSize: "1.5vw",
    },
    about: {
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "2%",
        marginBottom: "2%",
        fontSize: "1.5vw",
    },
    profiles: {
        marginLeft: "10%",
        marginRight: "10%",
    }
});

class About extends React.Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <NavigationBar></NavigationBar>
                <div className={classes.title}>
                    We Are <span className={classes.highlight}>Swelo</span>
                </div>
                <img alt="logo" src={logo} style={{ maxWidth: "5%" }}></img>
                <div className={classes.subtitle}>
                    Our <span className={classes.highlight}>Mission</span>
                </div>
                <div className={classes.body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className={classes.subtitle}>
                    Our <span className={classes.highlight}>Values</span>
                </div>
                <div className={classes.body}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className={classes.subtitle}>
                    Our <span className={classes.highlight}>Founders</span>
                </div>
                <div className={classes.profiles}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} className={classes.item}>
                            <img alt="alex" src={alex}></img>
                            <h3><strong>Alex Ellison</strong></h3>
                            <div className={classes.about}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </Grid>
                        <Grid item xs={6} className={classes.item}>
                            <img alt="brian" src={brian}></img>
                            <h3><strong>Brian Glat</strong></h3>
                            <div className={classes.about}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(About);