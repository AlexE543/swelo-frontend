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
import axios from 'axios';
import NavigationBar from './NavigationBar';
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TablePagination from "@material-ui/core/TablePagination";
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
    },
    tabbar: {
        marginBottom: "1rem"
    }
  });

const apiUrl = process.env.NODE_ENV === 'production'?'https://api.swimelo.com':'http://localhost:3333';

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            males: [],
            females: [],
            gender: "M",
            order: 'asc',
            orderBy: 'rank',
            page: 0,
            rowsPerPage: 10
        }
    }



    componentDidMount() {
        axios.get(`${apiUrl}/leaderboard/M`).then((res) => {
            try {
                let i = 1;
                let data = res.data.map(d => {
                    d['rank'] = i;
                    ++i;
                    return d;
                });
                this.setState({males: data, page: 0});
            } catch (err) {
                console.error(err);
            }
        });
        axios.get(`${apiUrl}/leaderboard/F`).then((res) => {
            try {
                let i = 1;
                let data = res.data.map(d => {
                    d['rank'] = i;
                    ++i;
                    return d;
                });
                this.setState({females: data, page: 0});
            } catch (err) {
                console.error(err);
            }
        });
    }

    handleTabChange = (event, newValue) =>  {
        if (newValue === "M") {
            this.setState({gender: "M", page: 0});
        } else {
            this.setState({gender: "F", page: 0});
        }
    };

    sortHandler = (key) => {
        return () => {
            this.setState({
                orderBy: key,
                order: this.state.order==='asc'?'desc':'asc'
            });
        }
    }

    handleChangePage = (event, newValue) => {
        this.setState({
            page: newValue
        });
    }

    handleChangeRowsPerPage = (event) => {
        this.setState({
            page: 0,
            rowsPerPage: event.target.value
        });
    }

    render() {
        const { classes} = this.props;
        return (
            <div className={classes.root}>
                <NavigationBar></NavigationBar>
                <div className={classes.tablecontainer}>
                    <Typography className={classes.title}>Elo Leaderboard</Typography>
                    <AppBar position="static" className={classes.tabbar}>
                        <Tabs value={this.state.gender} onChange={this.handleTabChange} aria-label="gender tabs">
                            <Tab value={'M'} label="Male" />
                            <Tab value={'F'} label="Female" />
                        </Tabs>
                    </AppBar>
                    <TableContainer className={classes.table} component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                            <TableRow className={classes.header}>
                                <TableCell align="left" sortDirection={this.state.orderBy==='rank'?this.state.order:false}>
                                    <TableSortLabel
                                      active={this.state.orderBy==='rank'}
                                      direction={this.state.orderBy==='rank'?this.state.order:'asc'}
                                      onClick={this.sortHandler('rank')}>
                                        Rank
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="left" sortDirection={this.state.orderBy==='firstName'?this.state.order:false}>
                                    <TableSortLabel
                                        active={this.state.orderBy==='firstName'}
                                        direction={this.state.orderBy==='firstName'?this.state.order:'asc'}
                                        onClick={this.sortHandler('firstName')}>
                                        Name
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="left" sortDirection={this.state.orderBy==='team'?this.state.order:false}>
                                    <TableSortLabel
                                        active={this.state.orderBy==='team'}
                                        direction={this.state.orderBy==='team'?this.state.order:'asc'}
                                        onClick={this.sortHandler('team')}>
                                        Team
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="left" sortDirection={this.state.orderBy==='elo'?this.state.order:false}>
                                    <TableSortLabel
                                      active={this.state.orderBy==='elo'}
                                      direction={this.state.orderBy==='elo'?this.state.order:'asc'}
                                      onClick={this.sortHandler('elo')}>
                                        Elo
                                    </TableSortLabel>
                                </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {stableSort(this.state[this.state.gender === 'M'?'males':'females'], getComparator(this.state.order, this.state.orderBy))
                              .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                              .map((swimmer, index) => (
                                <TableRow hover={true} style ={ index % 2? { background : "rgba(0, 84, 138, .2)" }:{ background : "white" }} className={classes.row} key={swimmer._id}>
                                <TableCell align="left" component="th" scope="row">
                                    {swimmer.rank}
                                </TableCell>
                                <TableCell align="left">{swimmer.firstName} {swimmer.lastName}</TableCell>
                                <TableCell align="left">{swimmer.team}</TableCell>
                                <TableCell align="left">{swimmer.elo.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50, 100]}
                        component="div"
                        count={this.state[this.state.gender === 'M'?'males':'females'].length}
                        rowsPerPage={this.state.rowsPerPage}
                        page={this.state.page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </div>
            </div>
        )
    }
}
export default withStyles(useStyles)(Leaderboard);