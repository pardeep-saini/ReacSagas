import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import WifiIcon from '@material-ui/icons/Wifi';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import RouterIcon from '@material-ui/icons/Router';
import * as S from '../Styled';
import { CSVLink, CSVDownload } from "react-csv";
import {   
  TextField, 
  Grid, 
  Search
} from "../../../includes";
let routerArray = [];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Invosys Wholesale', 'INVO225588', 'Zuxel VMG 1312-T20B', 'S200Y31026593', 'Online/Offline/Quarantine'),
  createData('Invosys Reseller1', 'DATA012223', 'Teachnicolor TG 588v2', 'S200Z000000', 'Online/Offline/Quarantine'),
  createData('Invosys Reseller2', 'DATA012224', 'Teachicolor DWA0120', 'S200Z000001', 'Online/Offline/Quarantine'),
  createData('Invosys Reseller3', 'DATA01225', 'Zyxel VMG3925-B10C', 'S200Z000002', 'Online/Offline/Quarantine'),
  createData('Invosys Reseller4', 'DATA01226', 'Draytek 2762n', 'S200Z000003', 'Online/Offline/Quarantine'),
];

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
export default function Routers() {
  const classes = useStyles();
  const[getRoutersDetails, setRoutersDetails] = useState()
  let handleChangeSearch;
   handleChangeSearch = event => {
    setRoutersDetails({
     rows: rows.filter(i =>
       i.name.toLowerCase().includes(event.target.value.toLowerCase()) || i.carbs.toLowerCase().includes(event.target.value.toLowerCase()),
     ),
    routerFilter:true,
   });
 
  if(getRoutersDetails && getRoutersDetails.routerFilter) {
      routerArray = getRoutersDetails.rows;
  } else {
     routerArray = rows
  }
 };

  return (
    <>
    <TabPanel style={S.customStyles.serachRouters}>
    <S.MainContainer>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField 
            id="input-with-icon-grid" 
            label={"Client Name,Serial Number"} 
            style={S.customStyles.labelStyle}
            onChange ={handleChangeSearch}
            />
          </Grid>
        </Grid>
    
       
     </S.MainContainer>
    </TabPanel>
     <TabPanel></TabPanel>
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell align="center">Customer Reference</TableCell>
            <TableCell align="center">Make&nbsp;/Modal</TableCell>
            <TableCell align="center">Serial Number</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Quick Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(routerArray, "routerArray")}
          {(!routerArray.length ?  rows : routerArray).map((row) => (

            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {console.log("imgdata", row)}
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center">
                <ThreeSixtyIcon style={S.customStyles.ThreeSixtyIcon} /> 
                <WifiIcon /> 
                <FileCopyIcon style={S.customStyles.ThreeSixtyIcon} />
                 <RouterIcon style={S.customStyles.ThreeSixtyIcon} />
                 </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        <TableBody><S.CSVDownload>Download <S.CSVColor><CSVLink data={rows} style={S.customStyles.CSVLink} filename={"Invosys.csv"}>CSV</CSVLink></S.CSVColor></S.CSVDownload></TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
