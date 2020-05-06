import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PoolIcon from '@material-ui/icons/Pool';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";

const useStyles = theme =>({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        this.setState({isOpen: open})
    };

    list = () => (
        <div
          role="presentation"
          onClick={this.toggleDrawer(false)}
          onKeyDown={this.toggleDrawer(false)}
        >
          <List>
              <ListItem button component={Link} to="/home" key={"Home"}>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <ListItem button component={Link} to="/about" key={"About"}>
                <ListItemIcon>{<InfoIcon />}</ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
              <ListItem button component={Link} to="/leaderboard" key={"Leaderboard"}>
                <ListItemIcon>{<PoolIcon />}</ListItemIcon>
                <ListItemText primary={"Leaderboard"} />
              </ListItem>
              <ListItem button component={Link} to="/betting" key={"Betting"}>
                <ListItemIcon>{<MonetizationOnIcon />}</ListItemIcon>
                <ListItemText primary={"Betting"} />
              </ListItem>
          </List>
        </div>
    );
    
    render () {
        // const {classes} = this.props;
        return (
            <div>
                <IconButton onClick={this.toggleDrawer(true)} color="inherit"><MenuIcon /></IconButton>
                <SwipeableDrawer
                    open={this.state.isOpen}
                    onClose={this.toggleDrawer(false)}
                    onOpen={this.toggleDrawer(true)}
                >
                    {this.list()}
                </SwipeableDrawer>
            </div>
        )
    }
}
export default withStyles(useStyles)(Drawer);