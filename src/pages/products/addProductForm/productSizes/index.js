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
import {
  Color,
  ColorRow,
  SizesContainer,
  SizesRow,
  buttonStyle,
  fieldStyle,
} from "./styles";
import { breakingPoints } from "../../../../global/theme";
import useBreakpoint from "../../../../utilities/mediaQuery";
import { FaPlus } from "react-icons/fa";
import { listButtonStyle } from "../styles";
import { colorsOptions } from "../../../../global";

export default function ProductSizes({ formUtils, selectedProductToUpdate }) {
  const [isProductSizesOpen, setIsProductSizesOpen] = useState(false);
  const [sizes, setSizes] = useState(selectedProductToUpdate?.sizes || []);
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const { setValue } = formUtils;
  const fields = [{ label: "Size", key: "size", type: "string" }];

  const handleOnChange = ({ target: { value } }, index, key) => {
    const newSizes = sizes?.map((elm, i) => {
      if (i === index) {
        elm[key] = value;
      }
      return elm;
    });
    setSizes(newSizes);
    setValue("sizes", newSizes);
  };

  const handleOnClick = (index) => {
    const newSizes = sizes.map((elm, i) => {
      if (i === index) {
        elm = null;
      }
      return elm;
    });
    setSizes(newSizes);
    setValue("sizes", newSizes);
  };

  useEffect(() => {
    if (selectedProductToUpdate?.sizes) {
      setValue("sizes", selectedProductToUpdate.sizes);
    }
  }, []);

  return (
    <>
      <style>
        {`
          .test:{
            height:100px
          }
        `}
      </style>
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
                    <FormControl
                      style={{
                        width: isSmallScreen ? "90%" : "25%",
                        marginTop: isSmallScreen && "15px",
                      }}
                    >
                      <InputLabel>Size</InputLabel>
                      <Select
                        label="size"
                        onChange={(e) => handleOnChange(e, index, "size")}
                        defaultValue={elm.size}
                      >
                        <MenuItem value={"large"}>Large</MenuItem>
                        <MenuItem value={"medium"}>Medium</MenuItem>
                        <MenuItem value={"small"}>Small</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl
                      style={{
                        width: isSmallScreen ? "90%" : "25%",
                        marginTop: isSmallScreen && "15px",
                      }}
                    >
                      <InputLabel>Color</InputLabel>
                      <Select
                        label="color"
                        onChange={(e) => handleOnChange(e, index, "color")}
                        defaultValue={elm.color}
                        MenuProps={{ style: { height: "300px" } }}
                        style={{ maxHeight: "55px" }}
                      >
                        {colorsOptions.map(({ text, color }) => {
                          return (
                            <MenuItem value={text}>
                              <ColorRow>
                                <Color color={color} />
                                <p style={{ marginLeft: "10px" }}>{text}</p>
                              </ColorRow>
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                    <FormControl
                      style={{
                        width: isSmallScreen ? "90%" : "25%",
                        marginTop: isSmallScreen && "15px",
                      }}
                    >
                      <InputLabel>Availability</InputLabel>
                      <Select
                        label="Availability"
                        onChange={(e) => handleOnChange(e, index, "inStock")}
                        defaultValue={elm.inStock}
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
              setSizes([...sizes, { size: null, color: null, inStock: null }]);
            }}
          >
            Add size
          </Button>
        </SizesContainer>
      </Collapse>
    </>
  );
}
