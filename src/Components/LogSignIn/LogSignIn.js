import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn} from './LogSignInManager';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';


const LogSignIn = () => {
    //const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
      handleResponse(res, true);
    })
    
}

const handleResponse = (res, redirect) =>{
  setUser(res);
  setLoggedInUser(res);
  if(redirect){
      history.replace(from);
  }
}
    return (
        <div>
            <Link to="/home"><img style={{height:'20%', width:'20%',marginLeft:'500px',marginTop:'30px',marginBottom:'20px'}} src={require('../../images/Icon.png')} alt="Icon"></img></Link>
            <div style={{border:'1px solid black',borderRadius:'10px',width:'500px',marginLeft:'420px',marginTop:'100px'}}>
                <div  style={{textAlign:'center'}}>
                    <h2>Log In with</h2>
                    <Button onClick={googleSignIn} style={{margin:'10px',borderRadius:'10px'}} variant="contained" color="primary">Continue with Google</Button>
                    <p>Don't have an account?<a href="#" onClick={googleSignIn} style={{color: 'blue'}}>Create An Account</a></p>
                </div>
            </div>
        </div>
    );
};

export default LogSignIn;