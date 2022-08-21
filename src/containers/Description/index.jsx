import { Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import PaperInformation from "../../components/paperInformation";
import LocationInformation from "../../components/locationInformation";
const Description = (props) =>{
    const { userState } = props;
    const { bio } = userState;
    return (
        <Fragment>
            <Stack>
                { bio != null
                ? <Typography>{bio}</Typography>
                : <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates aperiam quod obcaecati consequatur temporibus, id, debitis repellat consectetur dolorum doloribus possimus accusamus! Dolore corrupti molestiae quibusdam error velit aut ut!</Typography>
                }
            </Stack>
            <PaperInformation userState={userState}/>
            <LocationInformation userState={userState}/>

        </Fragment>
    );
};

export default Description;