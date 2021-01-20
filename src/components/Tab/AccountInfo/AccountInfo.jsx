import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import TableContainer from '@material-ui/core/TableContainer';
import DashBoardDetails from "../../../container/Dashboard/dashBoardDetails";
import {openRouterScreen} from '../../../actions/getDashBoardAccount/getAccountName'
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




function Row(props) {
  const { row, onopenRouterScreen } = props;
  const [open, setOpen] = React.useState(false);
  function getData(event) {
    console.log("EventData", event.target.value)
    onopenRouterScreen(true)
    
  }

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
        <TableCell align={right}>{"00"}</TableCell>
        <TableCell align={right}><Online>{row.id}</Online></TableCell>
        <TableCell align={right}><Offline>{"80"}</Offline></TableCell>
        <TableCell align={right}><Progress>{"90"}</Progress></TableCell>
        <TableCell align={right}>{row.id}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <Table size="small" aria-label="purchases">
                <TableBody>
                    <TableRow key={"Lorem Ipsum"}>
                         <TableCell/>
                      <TableCell component="th" scope="row" onClick={getData} value={"Lorem Ipsum"} style={{cursor: 'pointer'}}>
                        {"Lorem Ipsum"}
                      </TableCell>
                      <TableCell align={right}></TableCell>
                      <TableCell align={right}>{"85"}</TableCell>
                      <TableCell align={right}><Online>{"86"}</Online></TableCell>
                      <TableCell align={right}><Offline>{"87"}</Offline></TableCell>
                      <TableCell align={right}><Progress>{"88"}</Progress></TableCell>
                      <TableCell align={right}>{"89"}</TableCell>
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


function AccountInfo(props) {
  const {getAccountDetails} = props;
  let ResultData = [];
  if(props.serachResult && props.serachResult.action && props.serachResult.action.type === 'SEARCH_RESULT') {
    ResultData = props.serachResult && props.serachResult.action.resultObject && props.serachResult.action.resultObject.accountDetails;
  } else {
    ResultData = props.accountDetails;
  }

  return (
    <>
    {getAccountDetails.open ? <DashBoardDetails /> : <TableContainer component={Paper}>
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
          {ResultData && ResultData.map((row) => (
            <Row key={row.name} row={row} onopenRouterScreen = {props.onopenRouterScreen}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>}
   
    </>
  );
}


const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  onopenRouterScreen: openRouterScreen
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountInfo);
