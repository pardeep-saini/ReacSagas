import React, { Component } from 'react';
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import * as S from './Styled'
import {
    Paper,
	Grid
  } from "../../includes";
 

class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserList:[]
    }
  }
    render() {
      return (
      
		  
			<Grid item xs={12} style={S.customStyles.RouterdetailsContainer}>
			<Paper >
			<Grid  container spacing={1} >
			<Grid item xs={12} style={S.customStyles.Nav}>
				<Grid container justify="center" spacing={2} >
					<Grid  item xs={6}>
							<Paper style={S.customStyles.Router} variant="outlined" >
								<S.RouterHead>
									<S.Table>
									<S.Tbody>
									<S.Row>Connection Type</S.Row>
									<S.Row>IP Address</S.Row>
									<S.Row>Last Connection ?</S.Row>
								
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
								<S.RouterHead>
									<S.Table>
									<S.Tbody>
									<S.Row>ADSL / VDSL /EthernetWAN</S.Row>
									<S.Row>Pulled From API</S.Row>
									<S.Row>2020-11-16 08:57:41</S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
							</Paper>
					</Grid>
					<Grid  item xs={6}>
					<Paper style={S.customStyles.RouterDetails} variant="outlined">
					<S.RouterHead>
					<S.Table>
									<S.Tbody>
									<S.Row>Roter Uptime</S.Row>
									<S.Row>PPP Uptime</S.Row>
									<S.Row>Sync Uptime</S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
								<S.RouterHead>
								<S.Table>
									<S.Tbody>
									<S.Row>Pulled From API</S.Row>
									<S.Row>Pulled From API</S.Row>
									<S.Row>Pulled From API</S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
								
					</Paper>
					</Grid>
					
					
					
            </Grid>
            </Grid>
		    </Grid>
	
	</Paper>
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
  )(Connection);
