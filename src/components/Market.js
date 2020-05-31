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
import axios from 'axios';
require('dotenv').config();

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

const apiUrl = process.env.NODE_ENV === 'production'?'https://api.swimelo.com':'http://localhost:3333';

class Market extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            odds: [],
            ranks: {},
            lanes: {},
        }
    }
    
    componentDidMount() {
        axios.get(`${apiUrl}/market/${this.props.location.state.eventName}`).then((res) => {
            try {
                this.setState({odds: res.data.odds, ranks: res.data.ranks, lanes: res.data.lanes})
            } catch (err) {
                console.error(err);
            }
        });
    }

    render () {
        const {classes} = this.props;
        let marketData = this.state.odds.map((odd, index) => {
            return (
                <ExpansionPanel className={classes.panel} key={index}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <Typography className={classes.heading}>{this.state.ranks[index+1]}</Typography>
                        <Typography className={classes.heading}>{(1/odd).toFixed(2)}</Typography>
                        <Typography className={classes.heading}>{this.state.lanes[this.state.ranks[index+1]]}</Typography>
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
            );
        })
        return (
            <div className={classes.root}>
                <NavigationBar></NavigationBar>
                <div className={classes.head}>
                    <h1>{this.props.location.state.eventName}</h1>
                </div>
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
                    {marketData}
                </div>
                
            </div>
        );
    }
}

export default withStyles(useStyles)(Market);