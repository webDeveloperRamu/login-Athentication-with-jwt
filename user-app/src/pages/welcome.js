import { Box, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
    const name = localStorage.getItem("user")
    return (
        <div>
            <Box 
            display="flex"
             flexDirection={"column"}
              maxWidth={400} 
              alignItems="center" 
              margin="auto"
               borderRadius={5}
                boxShadow={'5px 5px 5px #ccc'} 
                padding={3}>

                <Typography>Welcome {name}</Typography>

            </Box>
        </div>
    )
}

export default HomePage;