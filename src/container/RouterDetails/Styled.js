import styled from "styled-components"

export const Container =  styled.div`
        padding-left: 3%;
        padding-right: 3%;
        background-color: rgb(242, 242, 242);
`;
export const RouterHead =  styled.h3`
        padding: 6%;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
}
`;
export const RouterFooter =  styled.h3`
        font-size: 13px;
        font-weight: 600;
        
        text-align: center;
}
`;
export const RouterValue =  styled.h3`
        font-size: 51px;
        font-weight: 500;
        text-align: center;
        margin-top: 10%
}
`;

export const Online = styled.span`
        color: #006400
`;
export const Offline = styled.span`
        color: #8B0000
`;
export const Progress = styled.span`
        color: #fbb713
`;
export const RouterDetails = styled.h3`
        padding-left: 4%;
        font-size: 18px;
`;
export const Table = styled.table`
        border-collapse: collapse; 
`;
export const Tbody = styled.tbody`
        text-align: justify
`;
export const Row = styled.tr`
`;
export const Image = styled.img`
        width: 47%;
`;
export const HeaderTitle = styled.p`
        width: 100%;
        cursor: pointer;
`;

export const customStyles = {
        content: {
                marginTop: '33px', backgroundColor:'#f2f2f2'
        },
        paper: {
                width: '200px',
                height: '225px',
                backgroundColor:'#e5e5e1',
                border: 'none',
              },

        RouterDetails: {
                width: '500px',
                height: '225px',
                border: 'none',
                borderLeft: '1px solid',
                borderRadius: '0px',
                display: 'flex',
              },

        Router:{
                // width: '400px',
                height: '225px',
                border: 'none',
                display: 'flex',
        },
        RouterdetailsContainer: {
                padding:'8%', 
                marginTop: '-12%'
        },
        MainContainer: {
                backgroundColor:"#e5e5e1", 
                height:'700px'
        },
        Nav:{
                marginTop: '45px'
        },
        paperSecondRow: {
        width: '470px',
        height: '217px',
        },

      };