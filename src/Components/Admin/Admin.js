import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Fab, Button } from "@material-ui/core";
import {Link} from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));



const Admin = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
  };
    return (
        <div>
          <Link to="/home"><img style={{height:'10%', width:'10%',marginLeft:'30px',marginTop:'10px',marginBottom:'5px'}} src={require('../../images/Icon.png')} alt="Icon"></img></Link>
            <br></br><br></br>
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab label="Volunteer Register List" {...a11yProps(0)} />
                    <Tab label="Add Event" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                   <div>
                       <h3>Volunteer Register List</h3>
                   </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div>
                        <h3>Add Event</h3>
                          <form action="https://pure-shore-46823.herokuapp.com/addevent" method="post" style={{marginLeft:'10px'}} className={classes.root} noValidate autoComplete="off">
                          <TextField name="name" style={{marginRight:'50px'}} id="standard-basic" label="Event Name" /><br></br>
                          <TextField name="description" style={{marginRight:'50px'}} id="standard-basic" label="Description" /><br></br>
                          <TextField name="date"  style={{marginRight:'50px'}}
                            id="datetime-local"
                            label="Event Date"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                          <label htmlFor="upload-photo">
                            <input
                              style={{ display: 'none' }}
                              id="upload-photo"
                              name="image"
                              type="file"
                            />
                            <Fab style={{marginRight:'30px',height:'60px',textAlign:'center'}}
                              color="secondary"
                              size="large"
                              component="span"
                              aria-label="add"
                              variant="extended"
                            > Upload photo</Fab>
                          </label><br></br><br></br>
                          <Button style={{margin:'5px',borderRadius:'10px',height:'70px'}} variant="contained" color="primary" type="submit">Add Event</Button>
                        </form>
                    </div>
                </TabPanel>
                </div>
        </div>
    );
};

export default Admin;