import React, { useState } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
const App = () => {
  //Estados iniciales y los mandamos al searcher
  //El searcher las recibe como props
  const [inputUser,setInputUser] = useState('octocat');
  const [userStater,userState] = useState('inputUser');
  console.log(inputUser);
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
      <Searcher inputUser={inputUser} setInputUser={setInputUser}></Searcher>
    </Container>
    
  )
};

export default App;