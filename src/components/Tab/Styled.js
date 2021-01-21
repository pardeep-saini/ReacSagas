import styled from "styled-components"

export const Container =  styled.div`
        padding-left: 3%;
        padding-right: 3%;
        background-color: rgb(242, 242, 242);
`;
export const MainContainer = styled.div`
      flex: 1;
`; 
export const CSVDownload = styled.p`
        font-size: 14px;
        padding: 9%;
`;
export const CSVColor = styled.span`
        background-color: black;
        color: white;
        padding: 6%;
        cursor: pointer;
`;
// export const Loader = styled.center`
//         margin-left: 942%;
// `;



export const customStyles = {
        content: {
                paddingLeft: '3%',paddingRight: '3%',backgroundColor:'#f2f2f2'
        },
        serachBar: {
                backgroundColor: 'white', width: '96%',marginLeft: 'auto',marginRight: 'auto'
        },
        serachRouters: {
                backgroundColor: 'white',marginLeft: 'auto',marginRight: 'auto'
        },
        RouterContainer: {
                height: 400, width: '100%', backgroundColor: 'white'
        },
        CSVLink: {
                color:'white'
        },
        ThreeSixtyIcon: {
                color:'#e88d74'
        },
        labelStyle :{
                fontSize: '13px', width: '107%'
        },
        loaderSyled: {
                marginLeft:' 942%'

        }
       
        
      };