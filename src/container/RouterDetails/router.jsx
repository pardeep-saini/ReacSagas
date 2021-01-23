import React, { Component } from 'react';
import { connect } from "react-redux";
import * as S from './Styled'
import {
    Paper,
	Grid
  } from "../../includes";
 


class Router extends Component {
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
					<Grid item xs={6}>
							<Paper style={S.customStyles.Router} variant="outlined" >
								<S.RouterHead>
									<S.Table>
									<S.Tbody>
									<S.Row>Order Number</S.Row>
									<S.Row>Router ID</S.Row>
									<S.Row>Shipment ID</S.Row>
									<S.Row>Order Date</S.Row>
									<S.Row>Customer Refrence</S.Row>
									<S.Row>Client Name</S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
								<S.RouterHead>
									<S.Table>
									<S.Tbody>
									<S.Row>12345</S.Row>
									<S.Row>123456789</S.Row>
									<S.Row>CourierShipmentID-LINK ?</S.Row>
									<S.Row>01/23/2021</S.Row>
									<S.Row>Customer #147258</S.Row>
									<S.Row>Joe Bloggs</S.Row>
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
									<S.Row>Manufacturer</S.Row>
									<S.Row>Modael</S.Row>
									<S.Row>Serial Number</S.Row>
									<S.Row>MAC Address</S.Row>
									<S.Row>State</S.Row>
									<S.Row>Uptime</S.Row>
									</S.Tbody>
									</S.Table>
								</S.RouterHead>
								<S.RouterHead>
								<S.Table>
									<S.Tbody>
									<S.Row>Zyxel</S.Row>
									<S.Row>Modal</S.Row>
									<S.Row>Serial</S.Row>
									<S.Row> MAC</S.Row>
									<S.Row>Active (Green)</S.Row>
									<S.Row>123456789</S.Row>
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
  )(Router);
