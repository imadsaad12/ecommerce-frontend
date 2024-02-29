import React, { useState } from "react";
import {
  Container,
  FormContainer,
  HeaderContainer,
  InputsContainer,
  SubTitle,
  Title,
  inputStyle,
} from "./styles";
import { Button, TextField } from "@mui/material";
import { useSignInQuery } from "../../apis/auth/sign-in";
import { ADMIN } from "../../routes/URLs";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../utilities/manageCookies";

export default function SignIn() {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSuccess = ({ data }) => {
    setCookie(data.accessToken);
    navigate(ADMIN);
  };

  const handleOnChange = ({ target: { value, name } }) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const { handleApiCall } = useSignInQuery({
    onSuccess,
  });

  const handleOnSubmit = () => handleApiCall(credentials);
  return (
    <Container>
      <FormContainer>
        <HeaderContainer>
          <Title>Welcome back!</Title>
          <SubTitle>
            Access the admin dashboard to manage and control your platform
            effortlessly.
          </SubTitle>
        </HeaderContainer>
        <InputsContainer>
          <TextField
            label="username"
            name="userName"
            variant="outlined"
            style={inputStyle}
            onChange={handleOnChange}
          />
          <TextField
            label="password"
            variant="outlined"
            type="password"
            name="password"
            style={inputStyle}
            onChange={handleOnChange}
          />
          <Button variant="contained" onClick={handleOnSubmit}>
            sign in
          </Button>
        </InputsContainer>
      </FormContainer>
    </Container>
  );
}
