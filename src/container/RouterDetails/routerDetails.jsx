import React, { Component } from 'react';
import { connect } from "react-redux";
import {ROUTER,CONNECTION,WIFI, TOOLS, VOIP} from './constant';
import {
    Paper,
	Grid
  } from "../../includes";
import * as S from './Styled'
import Header from '../../components/Header';
import Image from './images/routersdetails.PNG';
import Connection from './images/connection.PNG';
import Wifi from './images/wifi.PNG';
import Tootls from './images/tootls.PNG';
import Voip from './images/voip.PNG';
import RouterComponent from './router';
import ConnectionComponent from './connection';
import WifiComponent from './wifi';

class DashBoardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  getUserList:[],
	  details: ''
    }
  }
  RouterHandler = (e) => {
	  let {name} =  e.target
	 if(name === ROUTER) {
		 this.setState({details: ROUTER})
	 } else if(name === CONNECTION) {
		this.setState({details: CONNECTION})
	 } else if(name === WIFI) {
		this.setState({details: WIFI})
	 } else if(name === TOOLS) {
		this.setState({details: TOOLS})
	 } else if(name === VOIP) {
		this.setState({details: VOIP})
	 }
	//  console.log("State", this.state.details)
  }
 
    render() {
		const {details} = this.state;
		console.log("State", details)
      return (
        <Grid container style={S.customStyles.MainContainer}>
		   <Header/>
			
			<Grid  container spacing={1} >
			<Grid item xs={12} style={S.customStyles.Nav}>
				<Grid container justify="center" spacing={2}>
					<Grid  item>
							<Paper style={S.customStyles.paper} variant="outlined" onClick={(e)=>this.RouterHandler(e)}>
								<S.RouterHead >
									<S.Image src={Image} name="router"/>
									<S.HeaderTitle>Router Details</S.HeaderTitle>
								</S.RouterHead>
							</Paper>
					</Grid>
					<Grid  item>
					<Paper style={S.customStyles.paper} variant="outlined" onClick={(e)=>this.RouterHandler(e)}>
						<S.RouterHead>
						<S.Image src={Connection} name="connection"/>
						<S.HeaderTitle>Connections</S.HeaderTitle>
						</S.RouterHead>
					</Paper>
					</Grid>
					<Grid  item>
						<Paper style={S.customStyles.paper} variant="outlined" onClick={(e)=>this.RouterHandler(e)}>
							<S.RouterHead>
							<S.Image src={Wifi} name="wifi"/>
						    <S.HeaderTitle>WI-FI</S.HeaderTitle>
							</S.RouterHead>
						</Paper>
					</Grid>
					<Grid  item>
					<Paper style={S.customStyles.paper} variant="outlined" onClick={(e)=>this.RouterHandler(e)}>
						<S.RouterHead>
						<S.Image src={Tootls} name="tools" />
						    <S.HeaderTitle>Tools</S.HeaderTitle>
						</S.RouterHead>
					</Paper>
					</Grid>
					<Grid  item>
					<Paper style={S.customStyles.paper} variant="outlined" onClick={(e)=>this.RouterHandler(e)}>
						<S.RouterHead>
						<S.Image src={Voip} name="voip"/>
						    <S.HeaderTitle>VoIP</S.HeaderTitle>
						</S.RouterHead>
					</Paper>
					</Grid>
            </Grid>
            </Grid>
		    </Grid>
			{
					details==ROUTER ? 	
					<RouterComponent />
                    :  details==CONNECTION ? <ConnectionComponent />
                    :  details==WIFI ? <WifiComponent />
                    :  details==TOOLS ? "View Devices3"
                    :  details==VOIP ? "View Devices4"
                    : <RouterComponent />
                  }

	
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
  )(DashBoardDetails);
