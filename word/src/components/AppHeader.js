import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import LoginButton from './LoginButton';

const styles = {
  flex: {
    flex: 1,
  },
};

const AppHeader = ({ classes }) => (
  <Container maxWidth="sm">
   
    <Typography variant="h6" color="inherit">
        word.
    </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/posts">Posts Manager</Button>
      <div className={classes.flex} />
      <LoginButton />
    
  </Container>
);

export default withStyles(styles)(AppHeader);