import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem("user")
    const handlogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate('/login')
}
    return (
        <>
            <Typography variant='h4'>Welcome {username}</Typography>
            <Button variant="contained" sx={{ marginLeft: "auto" }} onClick={handlogOut}>LogOut</Button>

        </>
    )
}

export default Welcome;