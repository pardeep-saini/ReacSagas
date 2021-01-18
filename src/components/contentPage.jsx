import React from 'react';
import {
     Card, Image, Col, Row
} from 'antd';
import styled from '@emotion/styled';
const StyledImage = styled(Image)({
    width: '100%'
})

const GetAllSpaceLaunches = (props) => {
    let { data } = props;
    let spaceLaun = '';
    // if (data && data.length > 0) {
    //     spaceLaun = data.map((val) => {
    //         let launch = "";
    //         if (val.launch_success) {
    //             launch = "true";
    //         } else {
    //             launch = "false";
    //         }
    //         return <Col className="card" span={6}> <Card className="boxSadow" id={val.mission_name + val.flight_number}>
    //             <StyledImage src={val.links.mission_patch_small}></StyledImage>
    //             <label className="fontBold" className="fontCentre">{val.mission_name + val.flight_number}</label>
    //             <table>
    //                 <tbody>
    //                     <tr>
    //                         <td><span className="fontBold">Mission IDs</span></td>
    //                         <td>{val.mission_id}</td>
    //                     </tr>
    //                     <tr>
    //                         <td><span className="fontBold">Launch Years</span></td>
    //                         <td>{val.launch_year}</td>
    //                     </tr>
    //                     <tr>
    //                         <td><span className="fontBold">Successful Launch</span></td>
    //                         <td>{launch}</td>
    //                     </tr>
    //                     <tr>
    //                         <td><span className="fontBold">Successful Landing</span></td>
    //                         <td>{ }</td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //         </Card>
    //         </Col>
    //     })
    // }
    return (
        <React.Fragment>
            <div>
                <Row>
                    {spaceLaun}
                </Row>
            </div>
        </React.Fragment>
    );
}
export default GetAllSpaceLaunches;
