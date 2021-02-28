import React from 'react';
import LoginButton from './LoginButton';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';



const styles = {
	flex: {
		flex:1,
	},
};

const AppHeader = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        My React App
      </Typography>
      <div className={classes.flex} />
      <LoginButton />

    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);