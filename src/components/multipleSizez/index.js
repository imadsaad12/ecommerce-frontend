import React from "react";
import { Container } from "./styles";
import { TextField } from "@mui/material";

export default function MultipleSizes() {
  const fields = [
    { label: "Name", key: "name", type: "string" },
    { label: "Description", key: "description", type: "string" },
    { label: "Description", key: "description", type: "string" },
  ];
  return (
    <Container>
      {fields.map(({ key, label, type }) => (
        <TextField
          autoFocus
          required
          name={key}
          label={label}
          type={type}
          variant="outlined"
        />
      ))}
    </Container>
  );
}
