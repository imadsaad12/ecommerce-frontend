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
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { SizesContainer, SizesRow, buttonStyle, fieldStyle } from "./styles";
import { breakingPoints } from "../../../../global/breakingPoints";
import useBreakpoint from "../../../../utilities/mediaQuery";
import { FaPlus } from "react-icons/fa";
import { listButtonStyle } from "../styles";

export default function ProductSizes({ formUtils }) {
  const [isProductSizesOpen, setIsProductSizesOpen] = useState(false);
  const [sizes, setSizes] = useState([]);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const { register, setValue } = formUtils;
  const fields = [{ label: "Size", key: "size", type: "string" }];

  const handleOnChange = ({ target: { value } }, index, key) => {
    const newSizes = sizes.map((elm, i) => {
      if (i === index) {
        elm[key] = value;
      }
      return elm;
    });
    setSizes(newSizes);
    setValue("sizes", sizes);
  };

  const handleOnClick = (index) => {
    const newSizes = sizes.map((elm, i) => {
      if (i === index) {
        elm = null;
      }
      return elm;
    });
    setSizes(newSizes);
    setValue("sizes", sizes);
  };

  return (
    <>
      <ListItemButton
        style={listButtonStyle}
        onClick={() => setIsProductSizesOpen(!isProductSizesOpen)}
      >
        <ListItemIcon>
          {isProductSizesOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </ListItemIcon>
        <ListItemText primary="Product Sizes" />
      </ListItemButton>
      <Collapse in={isProductSizesOpen}>
        <SizesContainer>
          {sizes.map((elm, index) => {
            return (
              <>
                {elm !== null && (
                  <SizesRow>
                    {fields.map(({ key, label, type }) => {
                      return (
                        <TextField
                          autoFocus
                          required
                          name={key}
                          label={label}
                          type={type}
                          variant="outlined"
                          style={fieldStyle(isSmallScreen)}
                          onChange={(e) => handleOnChange(e, index, key)}
                        />
                      );
                    })}
                    <FormControl
                      style={{ width: isSmallScreen ? "70%" : "25%" }}
                    >
                      <InputLabel>Color</InputLabel>
                      <Select
                        label="color"
                        onChange={(e) => handleOnChange(e, index, "color")}
                      >
                        <MenuItem value={"Red"}>Red</MenuItem>
                        <MenuItem value={"Blue"}>Blue</MenuItem>
                        <MenuItem value={"Green"}>Green</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      style={{ width: isSmallScreen ? "70%" : "25%" }}
                    >
                      <InputLabel>Availability</InputLabel>
                      <Select
                        label="Availability"
                        onChange={(e) => handleOnChange(e, index, "inStock")}
                      >
                        <MenuItem value={true} defaultChecked>
                          In stock
                        </MenuItem>
                        <MenuItem value={false}>Out of stock</MenuItem>
                      </Select>
                    </FormControl>

                    <Button
                      variant="outlined"
                      color="error"
                      style={buttonStyle(isSmallScreen)}
                      onClick={() => handleOnClick(index)}
                    >
                      Delete
                    </Button>
                  </SizesRow>
                )}
              </>
            );
          })}

          <Button
            variant="contained"
            startIcon={<FaPlus />}
            style={{ marginBottom: "15px" }}
            onClick={() => {
              setSizes([...sizes, { size: "", color: "", inStock: "" }]);
            }}
          >
            Add size
          </Button>
        </SizesContainer>
      </Collapse>
    </>
  );
}
