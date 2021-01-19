import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Header from '../../components/Header';
import TabPannel from '../../components/Tab';
import { connect } from "react-redux";
import {getAccountDetails} from "../../actions/getDashBoardAccount/getAccountName";


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getUserList:[]
    }
  }
  componentDidMount() {
    this.props.ongetAccountDetails();
  }
  // componentDidUpdate(previousProps, previousState) {
  //   console.log("PrePropsData", previousProps, previousState)
  //   if (previousProps.getAccountDetails !== this.state.getUserList) {
  //     this.setState({getUserList: this.props.getAccountDetails.data})
  //   }
  // }
 
    render() {
   
      const {getAccountDetails} = this.props;
      console.log("ListProps", getAccountDetails.data)
      return (
        <Card>
            <CardContent>
                <Header/>
            </CardContent>
            
            <CardActions style={{marginTop: '33px', backgroundColor:'#f2f2f2'}}>
                <TabPannel accountDetails = {getAccountDetails.data}/>
            </CardActions>
      </Card>
      );
    }
  }
  const mapStateToProps = state => {
    return state;
  };
  
  const mapDispatchToProps = {
    ongetAccountDetails: getAccountDetails,
  };
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard);
