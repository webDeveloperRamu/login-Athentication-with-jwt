import { Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import images from "../images/abcd.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    checkpassword: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/users/register",
        input
      );
      alert(res.data.msg);
      navigate("/login");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <>
      <br />
      <br />
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={400}
        borderRadius={5}
        margin="auto"
        padding={3}
        alignItems="center"
        boxShadow={"5px 5px 10px #ccc"}
      >
        {/* <img id="img" src={images} alt="" /> */}
        {/* <Typography variant="h4">Register</Typography> */}
        <TextField
          type={"name"}
          placeholder="Name"
          margin="normal"
          value={input.name} 
          name="name"
          onChange={handleChange}
        />
        <TextField
          type={"email"}
          placeholder="Email"
          margin="normal"
          value={input.email}
          name="email"
          onChange={handleChange}
        />
        <TextField
          type={"password"}
          placeholder="Password"
          margin="normal"
          value={input.password}
          name="password"
          onChange={handleChange}
        />
        <TextField
          type={"password"}
          placeholder="Confirm Password"
          margin="normal"
          value={input.checkpassword}
          name="checkpassword"
          onChange={handleChange}
        />
        <br />
        <Button variant="contained" color="warning" onClick={handleSubmit}>
          Submit
        </Button>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </Box>
    </>
  );
};

export default Register;
