import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Searcher from "./components/Searcher";
import { getGitHubUser } from './services/users'; 
const App = () => {
  //Estados iniciales y los mandamos al searcher
  //El searcher las recibe como props
  const [inputUser,setInputUser] = useState('octocat');
  const [userStater,userState] = useState('inputUser');
  const gettingUser = async (user) => {  //Funcion asincron que trae la respuesta de la api, mandandole el parametro de inputuser(octocat) 
    const userResponse = await getGitHubUser(user)
    console.log(userResponse);
  }
  useEffect(()=>{   //Cuando cargamos la pagina se carga el useEffect y consulta la funcion  gettingUser
    gettingUser(inputUser)
  },[inputUser]) //Escuchara el input user constantemente
  //console.log(inputUser);
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