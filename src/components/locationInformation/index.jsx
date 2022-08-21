import React from "react";
import { Stack, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language"
import BusinessIcon from "@mui/icons-material/Business";
//1. Hacenos una grilla con el elemento Grid
//2 Usamos un stack para ponerlos en columnas
const LocationInformation = (props) =>{
    const { userState }= props
    const {
        location, twitter_username, blog, company
    } = userState;
    return (
        <Grid container> 
            <Grid item xs={6}>
                <Stack>
                    <LocationOnIcon/>
                    <Typography>{location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack>
                    <TwitterIcon/>
                    {twitter_username != null
                        ? <Typography>@{twitter_username}</Typography>
                        : <Typography>Not Available</Typography>
                    }
                    
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack>
                    <LanguageIcon/>
                    {blog != null
                        ? <Typography>{blog}</Typography>
                        : <Typography>Not Available</Typography>
                    }
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack>
                    <BusinessIcon/>
                    {company != null
                        ? <Typography>{company}</Typography>
                        : <Typography>Not Available</Typography>
                    }
                </Stack>
            </Grid>
        </Grid>
    )
};
export default LocationInformation;