import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AccountInfo from './AccountInfo/index';
import SearchAccount from '../SearchAccount';
import RouterScreen from './Routers';
import { connect } from "react-redux";
import {Container} from './Styled';
import * as S from './Styled';

function TabPanel(props) {

    console.log("HandleChange", props)
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
  console.log("a11yPropsa11yProps",index)
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


function SimpleTabs(props) {
  console.log("PropsDataDetails", props)
  const {accountDetails, getAccountDetails} = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    
    setValue(newValue);
  };

  

  return (
       <div className={classes.root} style={S.customStyles.content}>
      <AppBar position="static" style={{backgroundColor:'#f2f2f2'}}>
        <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="" 
        style={{color:'black'}}
        >
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Routers" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel></TabPanel>
      {value == 0 && getAccountDetails.open!= true? 
      <TabPanel style={S.customStyles.serachBar}>
         <SearchAccount value={value} accountDetails={accountDetails}  />
      </TabPanel> : null}
      
   
      <TabPanel value={value} index={0} >
          <AccountInfo accountDetails={accountDetails}  />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RouterScreen />
      </TabPanel>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleTabs);