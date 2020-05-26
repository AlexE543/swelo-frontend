import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';
import NavigationBar from './NavigationBar';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
require('dotenv').config();



const useStyles = theme => ({
    root: {
        color: "black",
    },
    table: {
        minWidth: 650,
        outlineStyle: "solid",
        outlineColor: "rgb(0, 84, 138)",
    },
    tablecontainer: {
        alignItems: "center",
        margin: "5%",
    },
    title: {
        fontSize: "3.5vw",
        alignContent: "center",
    },
    header: {
        borderBottom: "4px solid rgba(0, 84, 138, .8)"
    },
    row: {
        border: "2px solid rgba(0, 84, 138, .2)",
    }
  });

const apiUrl = process.env.NODE_ENV === 'production'?'https://api.swimelo.com':'http://localhost:3333';

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            males: [],
            females: [],
            gender: "M",
            checked: true,
        }
    }

    componentDidMount() {
        axios.get(`${apiUrl}/leaderboard/M`).then((res) => {
            try {
                this.setState({males: res.data});
            } catch (err) {
                console.error(err);
            }
        });
        axios.get(`${apiUrl}/leaderboard/F`).then((result) => {
            try {
                this.setState({females: result.data});
            } catch (err) {
                console.error(err);
            }
        });
    }

    handleTabChange = (event, newValue) =>  {
        if (newValue === "M") {
            this.setState({gender: "M", checked: true});
        } else {
            this.setState({gender: "F", checked: false});

        }
    };

    render() {
        const { classes} = this.props;
        return (
            <div className={classes.root}>
                <NavigationBar></NavigationBar>
                <div className={classes.tablecontainer}>
                    <Typography className={classes.title}>Elo Leaderboard</Typography>
                    <AppBar position="static">
                        <Tabs value={this.state.gender} onChange={this.handleTabChange} aria-label="simple tabs example">
                            <Tab value={'M'} label="Male" />
                            <Tab value={'F'} label="Female" />
                        </Tabs>
                    </AppBar>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow className={classes.header}>
                                <TableCell align="left">Rank</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Team</TableCell>
                                <TableCell align="left">Elo</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {this.state[this.state.gender === 'M'?'males':'females'].map((swimmer, index) => (
                                <TableRow hover="true" style ={ index % 2? { background : "rgba(0, 84, 138, .2)" }:{ background : "white" }} className={classes.row} key={swimmer._id}>
                                <TableCell align="left" component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="left">{swimmer.firstName} {swimmer.lastName}</TableCell>
                                <TableCell align="left">{swimmer.team}</TableCell>
                                <TableCell align="left">{swimmer.elo.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        )
    }
}
export default withStyles(useStyles)(Leaderboard);