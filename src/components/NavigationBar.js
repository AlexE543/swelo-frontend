import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Drawer from './AppDrawer'
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1,
  },
  name: {
    padding: "4px",
  },
  appBar: {
    backgroundColor: "#292c38"
  }
});

class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: localStorage.getItem("token"),
      name: localStorage.getItem("firstName"),
    }
  }

  handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    this.setState({token: null, name: null})
  }

  render () {
    const {classes} = this.props;

    if (this.state.token === null) {
      
      return (
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Drawer />
              <Typography variant="h6">
                Swelo
              </Typography>
              <div className={classes.spacer}></div>
              <Button component={Link} to="/signup" color="inherit">Signup</Button>
              <Button component={Link} to="/login" color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Drawer />
              <Typography variant="h6" className={classes.title}>
                Swelo
              </Typography>
              <div className={classes.spacer}></div>
              <AccountCircleIcon></AccountCircleIcon>
              <Typography className={classes.name}>{this.state.name}</Typography>
              <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
}

export default withStyles(useStyles)(NavigationBar);