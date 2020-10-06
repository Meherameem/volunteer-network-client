import React from 'react';
import {Link} from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <Link to="/home"><img style={{height:'10%', width:'10%',marginLeft:'30px',marginTop:'10px',marginBottom:'5px'}} src={require('../../images/Icon.png')} alt="Icon"></img></Link>
             <h1 style={{textAlign: 'center', margin:'50px'}}>Blogs are coming.Stay with us..</h1>
        </div>
    );
};

export default Blog;