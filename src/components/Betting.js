import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';

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
    },
    body: {
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "2%",
    },
    title: {
        width: "100%",
        textAlign: "center",
        marginBottom: "1%",
    }, 
    buy: {
        marginLeft: "1%",
        backgroundColor: "#2b9e40",
    },
});

class About extends React.Component {
    render () {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <div className={classes.head}>
                    <h1>Example Betting Market</h1>
                </div>
                <div className={classes.body}>
                    <Typography className={classes.title}>Men's 50m Freestyle</Typography>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Athlete Name</Typography>
                            <Typography className={classes.heading}>Athlete Win Odds</Typography>
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
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Athlete Name</Typography>
                            <Typography className={classes.heading}>Athlete Win Odds</Typography>
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
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Athlete Name</Typography>
                            <Typography className={classes.heading}>Athlete Win Odds</Typography>
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
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Athlete Name</Typography>
                            <Typography className={classes.heading}>Athlete Win Odds</Typography>
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
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Athlete Name</Typography>
                            <Typography className={classes.heading}>Athlete Win Odds</Typography>
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
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Athlete Name</Typography>
                            <Typography className={classes.heading}>Athlete Win Odds</Typography>
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
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Athlete Name</Typography>
                            <Typography className={classes.heading}>Athlete Win Odds</Typography>
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
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Athlete Name</Typography>
                            <Typography className={classes.heading}>Athlete Win Odds</Typography>
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
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className={classes.heading}>Athlete Name</Typography>
                            <Typography className={classes.heading}>Athlete Win Odds</Typography>
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

export default withStyles(useStyles)(About);