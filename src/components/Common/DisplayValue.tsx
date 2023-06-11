import { Typography } from "@mui/material";
import React from "react";


const DisplayValue = ({value, theme, onClick}: any) => {
    console.log("CHILD OF BlogMetaData : DisplayValue.render");

    return(
        <Typography onClick={onClick} sx={{ padding: theme.spacing(2), border: `1px solid ${theme.palette.primary.main}`, color: theme.palette.primary.main }} variant="h7" component="div">
            {value}
        </Typography>
    )
}

export default  DisplayValue;

//export default  React.memo(DisplayValue);