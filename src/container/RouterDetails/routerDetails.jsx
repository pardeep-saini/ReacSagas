import React, { Component } from 'react';
import { connect } from "react-redux";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import * as S from './Styled'
import {
    Paper,
	Grid
  } from "../../includes";
  import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import MuiTableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


import Header from '../../components/Header';
import Image from './images/routersdetails.PNG';
import Connection from './images/connection.PNG';
import WIFI from './images/wifi.PNG';
import Tootls from './images/tootls.PNG';
import Voip from './images/voip.PNG';
const TableCell = withStyles({
	root: {
	  borderBottom: "none"
	}
  })(MuiTableCell);
  
function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9)
  ];
  
class DashBoardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserList:[]
    }
  }
    render() {
      return (
        <Grid container style={{backgroundColor:"#e5e5e1", height:'700px'}}>
		   <Header/>
			<Grid  container spacing={1} >
			<Grid item xs={12} style={{marginTop: '55px'}}>
				<Grid container justify="center" spacing={2}>
					<Grid  item>
							<Paper style={S.customStyles.paper} variant="outlined">
								<S.RouterHead>
									<img src={Image} style={{width: '47%'}}/>
									<p>Router Details</p>
								</S.RouterHead>
								
							</Paper>
					</Grid>
					<Grid  item>
					<Paper style={S.customStyles.paper} variant="outlined">
						<S.RouterHead>
						<img src={Connection} style={{width: '39%'}}/>
						<p>Connections</p>
						</S.RouterHead>
					</Paper>
					</Grid>
					<Grid  item>
						<Paper style={S.customStyles.paper} variant="outlined">
							<S.RouterHead>
							<img src={WIFI} style={{width: '40%'}} />
							<p>WI-FI</p>
							</S.RouterHead>
						</Paper>
					</Grid>
					<Grid  item>
					<Paper style={S.customStyles.paper} variant="outlined">
						<S.RouterHead>
						<img src={Tootls} style={{width: '40%'}}/>
						<p>Tools</p>
						</S.RouterHead>
					</Paper>
					</Grid>
					<Grid  item>
					<Paper style={S.customStyles.paper} variant="outlined">
						<S.RouterHead>
						<img src={Voip} style={{width: '40%'}}/>
						<p>VoIP</p>
						</S.RouterHead>
					</Paper>
					</Grid>
            </Grid>
            </Grid>
		    </Grid>
			<Grid item xs={12} style={{padding:'8%', marginTop: '-12%'}}>
			<Paper >
      <Table >
       
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
             
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
		
      </Table>
    </Paper>
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
  )(DashBoardDetails);
