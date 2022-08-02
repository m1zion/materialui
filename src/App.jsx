import React from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
const App = () => {
  return(
    <Container sx={{
      background: 'whitesmoke',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'Column',
      alignItems: 'center'
    }}>
      <Searcher></Searcher>
    </Container>
    
  )
};

export default App;