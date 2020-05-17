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
require('dotenv').config();



const useStyles = theme => ({
    root: {
        // backgroundColor: "#014664",
        color: "gold",
    },
    table: {
        minWidth: 650,
    },
    tablecontainer: {
        alignItems: "center",
        margin: "5%",
    },
    title: {
        fontWeight: "Bolder",
        color: "white",
        fontSize: "2em",
        alignContent: "center",
    }, 
  });

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

    toggleGender = () => {
        console.log("gender toggled");
        if (this.state.gender === "M") {
            this.setState({gender: "F", checked: false});
            console.log("Male going female");
        } else {
            this.setState({gender: "M", checked: true})
            console.log("Female going Male");
        }
    };

    componentDidMount() {
        axios.get("https://api.swimelo.com/leaderboard/M").then((res) => {
            try {
                this.setState({males: res.data});
            } catch (err) {
                console.error(err);
            }
        });
        axios.get("https://api.swimelo.com/leaderboard/F").then((result) => {
            try {
                this.setState({females: result.data});
            } catch (err) {
                console.error(err);
            }
        });
    }

    render() {
        const { classes} = this.props;
        if (this.state.gender === "M") {
            return (
                <div className={classes.root}>
                    <NavigationBar></NavigationBar>
                    <div className={classes.tablecontainer}>
                        <Typography className={classes.title}>Elo Leaderboard</Typography>
                        <FormGroup align="center">
                            <FormControlLabel
                                control={<Switch color="inherit" size="medium" checked={this.state.checked} onChange={this.toggleGender} />}
                                label={this.state.gender==="M" ? "Male" : "Female"}
                            />
                        </FormGroup>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="left">Rank</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Team</TableCell>
                                    <TableCell align="left">Elo</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {this.state.males.map((swimmer, index) => (
                                    <TableRow key={swimmer._id}>
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
        } else if (this.state.gender === "F") {
            return (
                <div className={classes.root}>
                    <NavigationBar></NavigationBar>
                    <div className={classes.tablecontainer}>
                        <Typography className={classes.title}>Elo Leaderboard</Typography>
                        <FormGroup align="center">
                            <FormControlLabel
                                control={<Switch size="medium" checked={this.state.checked} onChange={this.toggleGender} />}
                                label={this.state.gender==="M" ? "Male" : "Female"}
                            />
                        </FormGroup>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="left">Rank</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Team</TableCell>
                                    <TableCell align="left">Elo</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {this.state.females.map((swimmer, index) => (
                                    <TableRow key={swimmer._id}>
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
}
export default withStyles(useStyles)(Leaderboard);