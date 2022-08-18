import React from "react";
import { Grid, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrincipalInformation from "../../components/principalInformation";
import MyAccount from "../../pages/MyAccount";
const UserCard = (props) =>{
    //console.log(props);
/*
    async function handleSubmit(event) {
      console.log("Navigate");
      event.preventDefault();
      await MyAccount(event.target);
      navigate('../containers/MyAccount');
    }
*/

    const{ userState } = props;
    const{ avatar_url } = userState;
    return(
        <Grid
        container
        >
            <Grid item xs={3}>
                <CardMedia
                    
                    component = "img"
                    alt="GitHub User"
                    image={ avatar_url }
                />
            </Grid>
            <Grid item xs={9}>
            <PrincipalInformation userState={userState}/>
            </Grid>
            
            {/*<Description/>*/}
        </Grid>
    )

}

export default UserCard;