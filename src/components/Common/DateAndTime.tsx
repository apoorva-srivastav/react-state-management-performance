import { Refresh } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ColorIcon } from "./CustomButton";
import CustomModal from "./CustomModal";

const DateAndTime = ({theme, currentTime, setCurrentTime}: any) => {
    console.log('CHILD OF BlogMetaData : DateAndTime.render');

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // useEffect(() => {
    //   setCurrentTime(new Date().toLocaleString())
    // })

    const handleClick = () => {
      setCurrentTime(new Date().toLocaleString())
    };
  
    return (
      <div style={{display: 'flex', border: `1px solid ${theme.palette.primary.main}` }}>
        <Button sx={{fontSize: '18px'}} onClick={handleOpen}>{currentTime}</Button>
        <CustomModal handleClose={handleClose} open={open}/>
        <ColorIcon onClick={handleClick}><Refresh/></ColorIcon>
      </div>
    );
  
}

export default DateAndTime;


//export default React.memo(DateAndTime);