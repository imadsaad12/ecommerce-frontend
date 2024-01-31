import React from "react";
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

export default function SignIn() {
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
          <TextField label="username" variant="outlined" style={inputStyle} />
          <TextField
            label="password"
            variant="outlined"
            type="password"
            style={inputStyle}
          />
          <Button variant="contained">sign in</Button>
        </InputsContainer>
      </FormContainer>
    </Container>
  );
}
