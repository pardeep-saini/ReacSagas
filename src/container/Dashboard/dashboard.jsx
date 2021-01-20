import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Header from '../../components/Header';
import TabPannel from '../../components/Tab';
import { connect } from "react-redux";
import {getAccountDetails} from "../../actions/getDashBoardAccount/getAccountName";
import * as S from './Styled';


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
  
 
    render() {
      const {getAccountDetails} = this.props;
      return (
        <Card>
            <CardContent>
                <Header/>
            </CardContent>
            
            <CardActions style={S.customStyles.content}>
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
