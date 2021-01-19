import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import {
  Collapse,
  IconButton,
  Table,
  TableBody,
  Paper,
  TableCell,
  TableHead,
  TableRow,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
  Grid
} from "../../../includes";

import styled from 'styled-components';
const right = "center";
const ShowDisplayOutlate = styled.span`
      display: block
`;
const Online = styled.span`
   color: #006400
`;
const Offline = styled.span`
   color: #8B0000
`;
const Progress = styled.span`
   color: #fbb713
`;

const useStyles = makeStyles((theme) => ({
  
  paper: {
    height: 140,
    width: 100,
  },
  
}));

function getData() {
  // showDashboardFlag = false;
  // console.log("showDashboardFlag", showDashboardFlag)
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  
  const data = {"one": 1, "two": 2, "three": 3, "four": 4}

  return (
    <React.Fragment>
      <TableRow >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center" >{"00"}</TableCell>
        <TableCell align="center"><Online>{row.id}</Online></TableCell>
        <TableCell align="center"><Offline>{"80"}</Offline></TableCell>
        <TableCell align="center"><Progress>{"90"}</Progress></TableCell>
        <TableCell align="center">{row.id}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <Table size="small" aria-label="purchases">
                <TableBody>
                    <TableRow key={"Lorem Ipsum"}>
                         <TableCell/>
                      <TableCell component="th" scope="row" onClick={getData} style={{cursor: 'pointer'}}>
                        {"Lorem Ipsum"}
                      </TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center">{"85"}</TableCell>
                      <TableCell align="center"><Online>{"86"}</Online></TableCell>
                      <TableCell align="center"><Offline>{"87"}</Offline></TableCell>
                      <TableCell align="center"><Progress>{"88"}</Progress></TableCell>
                      <TableCell align="center">{"89"}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


export default function AccountInfo(props) {
  const [showDashboardFlag, setDashboardFlag] = useState(false)
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
 const {accountDetails} = props;
  return (
    <>
    {showDashboardFlag ?  <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
      <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Account</TableCell>
            <TableCell align={right}>Routers</TableCell>
            <TableCell align={right}>Routers
            <ShowDisplayOutlate> (Online)</ShowDisplayOutlate>
         </TableCell>
            <TableCell align={right}>Routers <ShowDisplayOutlate>(Offline)</ShowDisplayOutlate></TableCell>
            <TableCell align={right}>Router <ShowDisplayOutlate>(In Progress)</ShowDisplayOutlate></TableCell>
            <TableCell align={right}>Quaranitine&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accountDetails && accountDetails.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer> :  <Grid container  spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
     
    </Grid>}
   
    </>
  );
}
