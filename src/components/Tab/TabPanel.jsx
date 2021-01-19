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
import {Container} from './Styled';

function TabPanel(props) {
  
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

export default function SimpleTabs(props) {
  const {accountDetails} = props;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <Container>
       <div className={classes.root} style={{paddingLeft: '3%',paddingRight: '3%',backgroundColor:'#f2f2f2'}}>
      <AppBar position="static" style={{backgroundColor:'#f2f2f2'}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" style={{color:'black'}}>
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Routers" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel></TabPanel>
      <TabPanel style={{backgroundColor: 'white', width: '96%',marginLeft: 'auto',marginRight: 'auto'}}>
         <SearchAccount />
      </TabPanel>
      <TabPanel value={value} index={0} >
          <AccountInfo accountDetails={accountDetails}  />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Routers
      </TabPanel>
    </div>
  
    // </Container>
   
  );
}