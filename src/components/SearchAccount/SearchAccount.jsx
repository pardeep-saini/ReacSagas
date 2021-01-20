import React, {useState} from 'react';
import { connect } from "react-redux";
import {   
    TextField, 
    Grid, 
    Search
  } from "../../includes";
  import {getSearchByAccount} from "../../actions/searchAccount";
import * as S from './Styled';


function SearchAccount(props) {
  const[getAccountDetails, setAccountDetails] = useState()
  let labelName;
  let handleChangeSearch;
  if(props.value==0) {
    labelName = 'Account Name'
    /**
     * 
     * @param {SearchAccount fucntion are use for filter the data by account name.} props 
     */
    handleChangeSearch = event => {
      setAccountDetails({
       accountDetails: props.accountDetails.filter(i =>
         i.name.toLowerCase().includes(event.target.value.toLowerCase()),
       )
     });
      props.ongetSearchByAccount(getAccountDetails)
   };

   /**
    * End
    */

  } else if(props.value == 1) {
    labelName = 'Client Name,Serial Number'
  }
 
  return (
    <>
       {props.value == 0 ? <S.MainContainer>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField 
            id="input-with-icon-grid" 
            label={labelName} 
            style={{fontSize: '13px'}}
            onChange ={handleChangeSearch}
            />
          </Grid>
        </Grid>
    
       
     </S.MainContainer>   : null}
     </>
  );
}


const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  ongetSearchByAccount: getSearchByAccount,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAccount);
