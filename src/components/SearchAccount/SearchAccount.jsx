import React from 'react';
import styled from 'styled-components';
import {   
    TextField, 
    Grid, 
    Search
  } from "../../includes";

const MainContainer = styled.div`
  flex: 1;
`;  
 
export default function SearchAccount() {
  return (
      <MainContainer>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Account Name" />
          </Grid>
        </Grid>
      </MainContainer>
   
  );
}
