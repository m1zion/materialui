import React from "react";
import { Grid, CardMedia, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrincipalInformation from "../../components/principalInformation";
import Description from "../Description";
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
    const navigate = useNavigate();
    const navigateToProductDetail = paramX => {
        console.log(paramX)
        navigation.navigate('../MyAccount',{
            itemId: paramX});
    };

    const{ userState } = props;
    const{ avatar_url } = userState;
    return(
        <Grid
        container
        spacing={2}
        sx={{
            marginTop:'15px'
        }}
        >
            <Grid item xs={3}>
                <CardMedia
                    onClick={navigateToProductDetail}
                    component = "img"
                    alt="GitHub User"
                    image={ avatar_url }
                    sx={{
                        borderRadius:'50%',
                        marginLeft:'5px'
                    }}
                />
            </Grid>
            {/*<p onClick={() => navigateToProductDetail(avatar_url)}>$Dis</p>*/}
            <Grid item xs={9}>
                <Stack
                    direction='column'
                    spacinf={1}
                    sx={{
                        margin:'30px'
                    }}>
                    <PrincipalInformation userState={userState}/>
                    <Description userState={userState}/>
                    {/*<MyAccount userState={userState}/>*/}
                </Stack>
            </Grid>            
            {/*<Description/>*/}
        </Grid>
    )

}

export default UserCard;