import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { InputBase } from '@material-ui/core';
import HomeCard from '../HomeCard/HomeCard';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Home = () => {
    const classes = useStyles();
    const [tasks,setTasks] = useState([]);
    useEffect(() => {
      fetch('https://pure-shore-46823.herokuapp.com/tasks')
      .then(res => res.json())
      .then(data =>{
        setTasks(data);
      })

    },[]);


    return (
        <div>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  <img style={{height:'20%', width:'20%'}} src={require('../../images/Icon.png')} alt="Icon"></img>
                </Typography>
                <Link className={styles.nav} to="/home"><Button color="inherit">Home</Button></Link>
                <Link className={styles.nav} to="/donation"><Button color="inherit">Donation</Button></Link>
                <Link className={styles.nav} to="/events"><Button color="inherit">Events</Button></Link>
                <Link className={styles.nav} to="/blog"><Button color="inherit">Blog</Button></Link>
                <Link className={styles.nav} to="/registration"><Button color="inherit">Reg</Button></Link>
                <Link className={styles.nav} to="/admin"><Button color="inherit">Admin</Button></Link>
              </Toolbar>
            </AppBar>
          </div>
          <div className={styles.caption}>
            <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
            <InputBase className={styles.search} placeholder="Search…"/>
            <Button style={{margin:'10px',borderRadius:'10px'}} variant="contained" color="primary">Search</Button>
          </div>
          {/* <div>
            {tasks.map(task => <HomeCard key={task._id} task={task}></HomeCard>)}
          </div> */}
          <div>
            <Grid container spacing={10}
              style={{padding: '40px'}}>
              {tasks.map(task => <Grid key={task._id} item
                xs={12} sm={6} md={4} lg={4} xl={4}>
                <HomeCard task={task}></HomeCard>

              </Grid>)}
            </Grid>
          </div>
        </div>
    );
};

export default Home;