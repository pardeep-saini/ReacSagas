import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import TableContainer from '@material-ui/core/TableContainer';
import DashBoardDetails from "../../../container/Dashboard/dashBoardDetails";
import {openRouterScreen} from '../../../actions/getDashBoardAccount/getAccountName'
import * as S from '../Styled';
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

const mainArray = [
  {
    "id": 1,
    "account": "Invosys Wholesale",
    "routers": "68",
    "routersonline": "50",
    "routersoffline": "10",
    "routersinprogree": "5",
    "quarantine": "3",
    "subAccount": [
      { 
        "id": "1",
        "account": "Abc",
        "routers": "68",
        "routersonline": "50",
        "routersoffline": "10",
        "routersinprogree": "5",
        "quaranitine": "3",
     },
     {
      "id": "2",
      "account": "Def",
      "routers": "20",
      "routersonline": "5",
      "routersoffline": "5",
      "routersinprogree": "5",
      "quaranitine": "5",
   }
    ],
   
  },
  {
    "id": 2,
    "account": "Invosys Wholesale2",
    "routers": "100",
    "routersonline": "50",
    "routersoffline": "30",
    "routersinprogree": "10",
    "quarantine": "10",
    "subAccount": [
      { 
        "id": "2",
        "account": "Ghi",
        "routers": "200",
        "routersonline": "50",
        "routersoffline": "50",
        "routersinprogree": "50",
        "quaranitine": "50",
     },
     {
      "id": "2",
      "routers": "300",
      "account": "Jkl",
      "routersonline": "50",
      "routersoffline": "50",
      "routersinprogree": "100",
      "quaranitine": "100",
   }
    ],
   
  },
  {
    "id": 2,
    "account": "Invosys Wholesale3",
    "routers": "100",
    "routersonline": "50",
    "routersoffline": "30",
    "routersinprogree": "10",
    "quarantine": "10",
    "subAccount": [
      { 
        "id": "2",
        "account": "Mno",
        "routers": "200",
        "routersonline": "50",
        "routersoffline": "50",
        "routersinprogree": "50",
        "quaranitine": "50",
     },
     {
      "id": "2",
      "routers": "300",
      "account": "Pqr",
      "routersonline": "50",
      "routersoffline": "50",
      "routersinprogree": "100",
      "quaranitine": "100",
   }
    ],
   
  },
  {
    "id": 2,
    "account": "Invosys Wholesale4",
    "routers": "100",
    "routersonline": "50",
    "routersoffline": "30",
    "routersinprogree": "10",
    "quarantine": "10",
    "subAccount": [
      { 
        "id": "2",
        "account": "Stu",
        "routers": "200",
        "routersonline": "50",
        "routersoffline": "50",
        "routersinprogree": "50",
        "quaranitine": "50",
     },
     {
      "id": "2",
      "account": "Vwx",
      "routers": "300",
      "routersonline": "50",
      "routersoffline": "50",
      "routersinprogree": "100",
      "quaranitine": "100",
   }
    ],
   
  },
 
 
]


function Row(props) {
 
  const { row, onopenRouterScreen } = props;
  const [open, setOpen] = React.useState(false);
  function getData(event) {
    console.log("EventTarget", event)
    onopenRouterScreen(true, row)
  }

  return (
    <React.Fragment>
      <TableRow >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" key={row.id}>
          {row.account}
        </TableCell>
        <TableCell align={right}>{row.routers}</TableCell>
        <TableCell align={right}><Online>{row.routersonline}</Online></TableCell>
        <TableCell align={right}><Offline>{row.routersoffline}</Offline></TableCell>
        <TableCell align={right}><Progress>{row.routersinprogree}</Progress></TableCell>
        <TableCell align={right}>{row.quarantine}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <Table size="small" aria-label="purchases">
                <TableBody>
                   {row.subAccount.map((items, index)=>{
                     console.log("TestedMap", items)
                     return(
                      <TableRow key={items.id}  onClick={getData}>
                      <TableCell/>
                   <TableCell component="th" scope="row"  value={"Lorem Ipsum"} style={{cursor: 'pointer'}}>
                     {items.account}
                   </TableCell>
                   <TableCell align={right}>{items.routers}</TableCell>
                   <TableCell align={right}><Online>{items.routersonline}</Online></TableCell>
                   <TableCell align={right}><Offline>{items.routersoffline}</Offline></TableCell>
                   <TableCell align={right}><Progress>{items.routersinprogree}</Progress></TableCell>
                   <TableCell align={right}>{items.quaranitine}</TableCell>
                 </TableRow>
                     )
                   })}
                   
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
  console.log("PropsStoreData", props)
  // let ResultData = [];
  // if(props.serachResult && props.serachResult.action && props.serachResult.action.type === 'SEARCH_RESULT') {
  //   ResultData = props.serachResult && props.serachResult.action.resultObject && props.serachResult.action.resultObject.accountDetails;
  // } else {
  //   ResultData = props.accountDetails;
  // }

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
        {mainArray && mainArray.length>0 ? null :  <center style={S.customStyles.loaderSyled}>
          <CircularProgress style={{width: '28px', height: '100%'}}/>
          </center> }
         
        
       
          {mainArray && mainArray.map((row) => (
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
