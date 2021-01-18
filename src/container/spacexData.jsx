import React, { Component } from 'react';
import { Layout} from 'antd';
import GetAllSpaceLaunches from '../components/contentPage';
import LeftSearchBox from '../components/leftSearching';
import { getAllSpaceLaunchesAction } from '../actions/spaceLaunchesAction';
import { connect } from 'react-redux';
import './style.css';
const { Header, Content, Sider } = Layout;
let value={
  launchyear:"",
  launchSuccess:""
}
class DashboardPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      spacexData: null
    }
  }
  componentDidMount() {
    this.getSpacexData(value);
  }
  componentDidUpdate(prevProps) {
    if (prevProps != this.props) {
      console.log(this.props);
      if (this.props.getAllData.getAllSpacex && this.props.getAllData.getAllSpacex.response) {
        if (this.props.getAllData.getAllSpacex.response.length > 0)
          this.setState({ spacexData: this.props.getAllData.getAllSpacex.response })
      }
    }
  }
  getSpacexData = () => {
    this.props.getAllSpaceLaunchesAction();
  };
  getSpacexDataByYear = (val) => {   
    value.launchyear=val;
    this.props.getAllSpaceLaunchesAction(value);
  }
  getByLaunch=(val)=>{
    value.launchSuccess=val;
    this.props.getAllSpaceLaunchesAction(value);
  }
  render() {
    console.log("ProspData>>>", this.props)
    return (
      <>
        <Content>
          <Layout>
            <Header className="header-background">
              <div className="logo" />
            </Header>
            <Layout>
              <Sider width={200} theme="light" className="site-layout-background">
                <LeftSearchBox getSpacexDataByYear={this.getSpacexDataByYear} getByLaunch={this.getByLaunch}/>
              </Sider>
              <Layout>
                <Content
                  className="site-layout-background"
                  style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                  }}
                >
                  <GetAllSpaceLaunches data={this.state.spacexData}  />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Content>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  getAllData: state.getAllSpacex
})
const mapDispatchToProps = {
  getAllSpaceLaunchesAction: getAllSpaceLaunchesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);