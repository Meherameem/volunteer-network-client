import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';

const SpecificUser = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div>
            <Link to="/home"><img style={{height:'10%', width:'10%',marginLeft:'30px',marginTop:'10px',marginBottom:'5px'}} src={require('../../images/Icon.png')} alt="Icon"></img></Link>
                <div style={{margin:'100px',textAlign:'center'}}>Welcome {loggedInUser.name}</div>
        </div>
    );
};

export default SpecificUser;