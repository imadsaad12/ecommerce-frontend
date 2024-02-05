import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FormContainer, fieldStyle } from "./styles";
import useBreakpoint from "../../../../utilities/mediaQuery";
import { breakingPoints } from "../../../../global/breakingPoints";
import { listButtonStyle } from "../styles";

export default function ProductInformation({ formUtils }) {
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(false);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const { register } = formUtils;
  const fields = [
    { label: "Name", key: "name", type: "string" },
    { label: "Description", key: "description", type: "string" },
    { label: "Price", key: "price", type: "number" },
  ];

  return (
    <>
      <ListItemButton
        style={listButtonStyle}
        onClick={() => setIsProductInfoOpen(!isProductInfoOpen)}
      >
        <ListItemIcon>
          {isProductInfoOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </ListItemIcon>
        <ListItemText primary="Product Information" />
      </ListItemButton>
      <Collapse in={isProductInfoOpen}>
        <FormContainer>
          {fields.map(({ key, label, type }) => (
            <TextField
              autoFocus
              required
              name={key}
              label={label}
              type={type}
              variant="outlined"
              style={fieldStyle(isSmallScreen)}
              {...register(key)}
            />
          ))}
        </FormContainer>
      </Collapse>
    </>
  );
}
