import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Donation = () => {
    const classes = useStyles();

    return (
        <div>
          <Link to="/home"><img style={{height:'10%', width:'10%',marginLeft:'30px',marginTop:'10px',marginBottom:'5px'}} src={require('../../images/Icon.png')} alt="Icon"></img></Link>
            <h1 style={{textAlign: 'center', margin:'50px'}}>Any Small or Big Donation is highly appreciated.</h1>
            <form style={{marginLeft:'500px'}} className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Name" /><br></br>
            <TextField id="standard-basic" label="Email" /><br></br>
            <TextField id="standard-basic" label="Phone No" /><br></br>
            <TextField id="standard-basic" label="Donation Amount ($$)" /><br></br>
            <TextField id="standard-basic" label="Card No" /><br></br><br></br>
            <Button style={{margin:'10px',borderRadius:'10px'}} variant="contained" color="primary">Donate</Button>
            </form>
        </div>
    );
};

export default Donation;