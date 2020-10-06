import { Grid, useScrollTrigger } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const SpecificUser = () => {
    const [user,setUser] = useState([]);
    useEffect(() => {
      fetch('https://pure-shore-46823.herokuapp.com/users')
      .then(res => res.json())
      .then(data =>{
        setUser(data);
      })
    },[]);
    
    return (
        <div>
            <Link to="/home"><img style={{height:'10%', width:'10%',marginLeft:'30px',marginTop:'10px',marginBottom:'5px'}} src={require('../../images/Icon.png')} alt="Icon"></img></Link>
                <div style={{margin:'50px',textAlign:'center'}}>
                    <h3>
                    Welcome
                    </h3>
                    <div>
                        <Grid container spacing={10}
                        style={{padding: '40px'}}>
                        {user.map(use => <Grid key={use._id} item
                            xs={12} sm={6} md={4} lg={4} xl={4}>
                            <div style={{border: '1px solid black',textAlign:'left',padding: '5px',borderRadius:'10px'}}>
                                    <p>{use.name}</p>
                                    <p>{use.email}</p>
                                    <p>{use.subject}</p>
                                    <p>{use.description}</p>
                                    <p>{use.date}</p>
                                </div>

                        </Grid>)}
                        </Grid>
                    </div>
                </div>
        </div>
    );
};

export default SpecificUser;