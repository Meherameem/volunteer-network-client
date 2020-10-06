import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

const Registration = () => {
    const classes = useStyles();
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    return (
        <div>
            <Link to="/home"><img style={{height:'10%', width:'10%',marginLeft:'600px',marginTop:'10px',marginBottom:'5px'}} src={require('../../images/Icon.png')} alt="Icon"></img></Link>
            <form action="http://localhost:5000/users" method="post" style={{marginLeft:'500px', border:'1px solid darkgrey',width:'300px',padding:'15px',borderRadius:'10px'}} className={classes.root} noValidate autoComplete="off">
                <h3>Register As A Volunteer</h3>
            <TextField id="standard-basic" label="Name" value={loggedInUser.name} name="name" /><br></br>
            <TextField id="standard-basic" label="Email" value={loggedInUser.email} name="email" /><br></br>
            <TextField id="standard-basic" label="Date" name="date" /><br></br>
            <TextField id="standard-basic" label="Description" name="description" /><br></br>
            <TextField id="standard-basic" label="Volunteering Sector" name="subject" /><br></br><br></br>
            {/* <Link to="/specUser"> */}
              <Button type="submit" style={{margin:'10px',borderRadius:'10px'}} variant="contained" color="primary">Register</Button>
            {/* </Link> */}
            </form>
        </div>
    );
};

export default Registration;