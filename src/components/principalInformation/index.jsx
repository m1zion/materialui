import { Typography, Stack } from "@mui/material";
import React, {Fragment} from "react";
import { useNavigate } from "react-router-dom";
const PrincipalInformation =(props) =>{
    const navigate = useNavigate();
    const navigateToProductDetail = () => {
        navigate('../MyAccount');
      };


    const { userState } = props;
    const { 
        name,
        login,
        created_at,

     } = userState;
    
     return(
        <Fragment>
            <Stack direction="row"
            sx= {{
                justifyContent:"space-between"
            }}>
                <Typography variant="h4" onClick={navigateToProductDetail}>{name}</Typography>    
                <Typography variant="subtitle2">{created_at}</Typography>
            </Stack> {/*Stack Nos ayuda a poner la informacion en flexbox*/}
            <Typography variant="caption">{`@${login}`}</Typography>
        </Fragment>
     )
}

export default PrincipalInformation;