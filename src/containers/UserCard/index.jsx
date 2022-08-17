import React from "react";
import { Grid, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyAccount from "../MyAccount";
const UserCard = (props) =>{

    const navigate = useNavigate();
/*
    async function handleSubmit(event) {
      console.log("Navigate");
      event.preventDefault();
      await MyAccount(event.target);
      navigate('../containers/MyAccount');
    }
*/
const navigateToProductDetail = () => {
    navigate('../MyAccount');
  };
    
    const{ userState } = props;
    const{ avatar_url } = userState;

    return(
        <Grid
        contenedor
        >
            <Grid item xs={3}>
                <CardMedia
                    onClick={navigateToProductDetail}
                    component = "img"
                    alt="GitHub User"
                    image={ avatar_url }
                />
            </Grid>
            <Grid item xs={9}></Grid>
        </Grid>
    )

}

export default UserCard;