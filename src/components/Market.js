import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import NavigationBar from './NavigationBar';

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

class Market extends React.Component {
    render () {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <NavigationBar></NavigationBar>
                <div className={classes.head}>
                    <h1>Example Betting Market</h1>
                </div>
                <Typography className={classes.title}>{this.props.location.state.eventName}</Typography>
                <div className={classes.body}>
                    <ExpansionPanel className={classes.first} expanded={false} style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon style={{color: "white"}}/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Athlete Name</Typography>
                            <Typography className={classes.heading}>Athlete Win Odd</Typography>
                            <Typography className={classes.heading}>Athlete Lane</Typography>
                            </ExpansionPanelSummary>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.panel}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Kregor Zirk</Typography>
                            <Typography className={classes.heading}>100</Typography>
                            <Typography className={classes.heading}>1</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput 
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                            <Button className={classes.buy}>Place Bet</Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.panel} style={{background : "rgba(0, 84, 138, .2)"}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Chad Le Clos</Typography>
                            <Typography className={classes.heading}>6.6</Typography>
                            <Typography className={classes.heading}>2</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput 
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                            <Button className={classes.buy}>Place Bet</Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.panel}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Jan Switkowski</Typography>
                            <Typography className={classes.heading}>52.6</Typography>
                            <Typography className={classes.heading}>3</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput 
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                            <Button className={classes.buy}>Place Bet</Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.panel} style={{background : "rgba(0, 84, 138, .2)"}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Caeleb Dressel</Typography>
                            <Typography className={classes.heading}>1.9</Typography>
                            <Typography className={classes.heading}>4</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput 
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                            <Button className={classes.buy}>Place Bet</Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.panel}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Tom Shieldsr</Typography>
                            <Typography className={classes.heading}>46.2</Typography>
                            <Typography className={classes.heading}>5</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput 
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                            <Button className={classes.buy}>Place Bet</Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.panel} style={{background : "rgba(0, 84, 138, .2)"}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Jack Conger</Typography>
                            <Typography className={classes.heading}>21.9</Typography>
                            <Typography className={classes.heading}>6</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput 
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                            <Button className={classes.buy}>Place Bet</Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.panel}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Vini Lanza</Typography>
                            <Typography className={classes.heading}>100</Typography>
                            <Typography className={classes.heading}>7</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput 
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                            <Button className={classes.buy}>Place Bet</Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel className={classes.panel} style={{background : "rgba(0, 84, 138, .2)"}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>James Guy</Typography>
                            <Typography className={classes.heading}>3.7</Typography>
                            <Typography className={classes.heading}>8</Typography>
                            </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                                <OutlinedInput 
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                            <Button className={classes.buy}>Place Bet</Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
                
            </div>
        );
    }
}

export default withStyles(useStyles)(Market);