import React, {useState} from "react";
import { IconButton, Stack, TextField, InputAdornment } from "@mui/material"; //Para controlar la posicion
import SearchIcon from '@mui/icons-material/Search';
//Las propiedades me las traigo de materialui ej.
//https://mui.com/material-ui/react-text-field/
const Searcher = (props) =>{
    const {inputUser,setInputUser} = props; //Son los que manda App.jsx
    const [valueInput, setValueInput] = useState(''); //Valor inicial del input osea nada
    const onSearchValueChange =  (event) => {
        const inputValue = event.target.value; //Esto es lo que esta tecleando lo vamos guardando en el inputvalue
        setValueInput(inputValue);
    }
    console.log('valueInput',valueInput);
    const handleSubmit = () =>{
        setInputUser(valueInput);
        //console.log('inputInput',inputUser);
    }
    return (
        <Stack 
            direction='row'
            sx={{            
            marginTop: '30px',
            width: '80%'
        }}>
            <TextField
                id="outlined-basic" 
                label="GitHub User" 
                variant="outlined"
                placeholder="Buscar Usuario"
                size="small"
                value = {valueInput}
                onChange = {onSearchValueChange}
                sx={{
                    width: '90%',
                }}>
            </TextField>
            <IconButton
                onClick={handleSubmit} 
                sx={{
                    left:'-45px',
                    size:'small'
                }}
            >
                <SearchIcon/>
            </IconButton>
        </Stack>
    )
}

export default Searcher;