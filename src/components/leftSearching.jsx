import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import styled from '@emotion/styled';
const StyledButton = styled(Button)({
    backgroundColor: "burlywood"
})
const LeftSearchBox = (props) => {
console.log("PropsData", props);
    let { getSpacexDataByYear , getByLaunch } = props;
    function getDataByYear(e) {  
        e.preventDefault();
        let val=e.currentTarget.innerText;
        getSpacexDataByYear(val);
      }
      function geSpacesLaunch(e){
          e.preventDefault();
          let val=e.currentTarget.innerText;
          getByLaunch(val);
      }
    let colData = [];
    for (let i = 2006; i <= 2020; i++) {
        colData.push(<Col span={12}><StyledButton onClick={getDataByYear}>{i}</StyledButton></Col>)
    }
    return (<Card>
        <label className="fontCentre">Filters</label>
        <label className="lableBottam">Launch Year</label>
        <Row>
            {colData}
        </Row>
        <label className="lableBottam">Sucessful Launch</label>
        <Row>
            <Col span={12}><StyledButton onClick={geSpacesLaunch}>True</StyledButton></Col>
            <Col span={12}><StyledButton>False</StyledButton></Col>
        </Row>
        <label className="lableBottam">Successful Landing</label>
        <Row>
            <Col span={12}><StyledButton>True</StyledButton></Col>
            <Col span={12}><StyledButton>False</StyledButton></Col>
        </Row>
    </Card>)

}
export default LeftSearchBox;
