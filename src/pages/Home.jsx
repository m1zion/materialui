import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Searcher from "../components/Searcher";
import { getGitHubUser } from '../services/users'; 
import UserCard from "../containers/userCard";
import { useNavigate } from "react-router-dom";
import MyAccount from "./MyAccount";
const Home = () =>{
    
     //Estados iniciales y los mandamos al searcher
  //El searcher las recibe como props
  const [inputUser,setInputUser] = useState('octocat');
  const [userState,setUserState] = useState('inputUser');
  const [notFound, setNotFound] = useState(false);


  const gettingUser = async (user) => {  //Funcion asincron que trae la respuesta de la api, mandandole el parametro de inputuser(octocat) 
    const userResponse = await getGitHubUser(user)
    //Vamos a guardar octocat por que lo desplegaremos en caso de que busquemos un usuario inexistente
    if(userState === 'octocat'){
      localStorage.setItem('octocat', userResponse)  //Guardamos todo el Json inicial en la variable octocat de localstorage
    }
    //Si no encontramos el usuario la mandamos al setInputUser
    if(userResponse.message === 'Not Found'){
      const { octocat } = localStorage;  //Aqui accedemos a la variable de localstorage de octocat
      setInputUser(octocat)
      setNotFound(true) 
    } else {
      setUserState(userResponse);
    }
    //console.log(userResponse);
  }
  console.log(userState);
  useEffect(()=>{   //Cuando cargamos la pagina se carga el useEffect y consulta la funcion  gettingUser
    gettingUser(inputUser)
  },[inputUser]) //Escuchara el input user constantemente
  //console.log(inputUser);
  
  return (
        
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
        <UserCard userState={userState}/>
      </Container>
    
    );
}
export default Home;