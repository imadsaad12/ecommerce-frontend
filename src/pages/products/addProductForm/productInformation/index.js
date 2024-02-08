import {
  Button,
  Collapse,
  FormControl,
  InputLabel,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FormContainer, categoryButtonStyle, fieldStyle } from "./styles";
import useBreakpoint from "../../../../utilities/mediaQuery";
import { breakingPoints } from "../../../../global/breakingPoints";
import { listButtonStyle } from "../styles";
import AddCategoryPopup from "./addCategoryPopup";
import { useGetCategoriesQuery } from "../../../../apis/categories/getCategories";

export default function ProductInformation({ formUtils }) {
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(false);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const { isLoading, response } = useGetCategoriesQuery();
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const { register } = formUtils;
  const fields = [
    { label: "Name", key: "name", type: "string" },
    { label: "Description", key: "description", type: "string" },
    { label: "Price", key: "price", type: "number" },
  ];

  // useEffect(() => {
  //   if(!isLoading){
  //     set
  //   }
  // }, [isLoading])

  return (
    <>
      <AddCategoryPopup
        setIsAddCategoryOpen={setIsAddCategoryOpen}
        isAddCategoryOpen={isAddCategoryOpen}
        formUtils={formUtils}
      />
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
          <Button
            variant="contained"
            style={categoryButtonStyle}
            onClick={() => setIsAddCategoryOpen(true)}
          >
            Add Category
          </Button>
          <FormControl style={{ width: isSmallScreen ? "70%" : "25%" }}>
            <InputLabel>Category</InputLabel>
            <Select label="color" {...register("category")}>
              {response?.data?.map(({ category }) => {
                return (
                  <MenuItem value={"Red"}>
                    <ListItemText>{category}</ListItemText>
                    <Button>Edit</Button>
                    <Button color="error">Delete</Button>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
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
