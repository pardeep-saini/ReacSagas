import React, { Component } from 'react';
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import * as S from './Styled'
import {
    Paper,
	Grid
  } from "../../includes";
  
 

class Wifi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserList:[]
    }
  }
    render() {
      return (
        <Grid container spacing={3} style={S.customStyles.RouterdetailsContainer}>
        <Grid item xs={12} >
          <Paper style={S.customStyles.Router} variant="outlined">xs=12</Paper>
        </Grid>
        <Grid item xs={12} >
          <Paper style={S.customStyles.Router} variant="outlined">xs=12</Paper>
        </Grid>

      </Grid>
      );
    }
  }
  const mapStateToProps = state => {
    return state;
  };
  
  const mapDispatchToProps = {
    
  };
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wifi);
