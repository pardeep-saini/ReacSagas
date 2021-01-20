import React, { Component } from 'react';
import { connect } from "react-redux";
import * as S from './Styled'
import {
    Paper,
    Grid
  } from "../../includes";


class DashBoardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserList:[]
    }
  }
    render() {
      const {getAccountDetails} = this.props;
      return (
        <>
      <Grid container  spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Paper style={S.customStyles.paper}>
                  <S.RouterHead>
                  {
                    value==0 ? "Total Devices"
                    :  value==1 ? "Online Devices"
                    :  value==2 ? "Offline Devices"
                    : "Router In Progress"
                  }
                  </S.RouterHead>
                  <S.RouterValue>
                  {
                    value==0 ? "50"
                    :  value==1 ? <S.Online>45</S.Online>
                    :  value==2 ? <S.Offline>3</S.Offline>
                    : <S.Progress>2</S.Progress>
                  }
                  </S.RouterValue>
                  <S.RouterFooter>
                  {
                    value==0 ? "View All Devices"
                    :  value==1 ? "View Devices"
                    :  value==2 ? "View Devices"
                    : "View Devices"
                  }
                  </S.RouterFooter>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1].map((value) => (
            <Grid key={value} item>
              <Paper style={S.customStyles.paperSecondRow} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
      </>
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
  )(DashBoardDetails);
