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
import { breakingPoints } from "../../../../global/theme";
import { listButtonStyle } from "../styles";
import AddCategoryPopup from "./addCategoryPopup";
import { useGetCategoriesQuery } from "../../../../apis/categories/getCategories";
import DeleteProductPopup from "./deleteCategoryPopup";
import EditCategoryPopup from "./editCategory";

export default function ProductInformation({
  formUtils,
  selectedProductToUpdate = {},
  isEditingMode = false,
}) {
  const [isProductInfoOpen, setIsProductInfoOpen] = useState(false);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [isDeleteCategoryPopupOpen, setIsDeleteCategoryPopupOpen] =
    useState(false);
  const [isEditCategoryPopupOpen, setIsEditCategoryPopupOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    selectedProductToUpdate?.category || ""
  );
  const [selectedIdForAction, setSelectedIdFroAction] = useState("");
  const [selectedType, setSelectedType] = useState(
    selectedProductToUpdate?.type || ""
  );
  const [categories, setCategories] = useState([]);
  const { isLoading, response, refetch } = useGetCategoriesQuery();
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const { register } = formUtils;
  const fields = [
    { label: "Name", key: "name", type: "string" },
    { label: "Price", key: "price", type: "number" },
    { label: "Description", key: "description", type: "string" },
  ];

  useEffect(() => {
    if (!isLoading) {
      setCategories(response.data);
    }
  }, [isLoading]);

  const refreshCategories = () => {
    refetch()
      .then(({ data: { data } }) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <EditCategoryPopup
        formUtils={formUtils}
        setIsEditCategoryOpen={setIsEditCategoryPopupOpen}
        isEditCategoryOpen={isEditCategoryPopupOpen}
        refreshCategories={refreshCategories}
        selectedIdForAction={selectedIdForAction}
        setSelectedCategory={setSelectedCategory}
      />

      <DeleteProductPopup
        setIsDeleteCategoryPopupOpen={setIsDeleteCategoryPopupOpen}
        isDeleteCategoryPopupOpen={isDeleteCategoryPopupOpen}
        refreshCategories={refreshCategories}
        selectedIdForAction={selectedIdForAction}
      />
      <AddCategoryPopup
        setIsAddCategoryOpen={setIsAddCategoryOpen}
        isAddCategoryOpen={isAddCategoryOpen}
        formUtils={formUtils}
        refreshCategories={refreshCategories}
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
            style={categoryButtonStyle(isSmallScreen)}
            onClick={() => setIsAddCategoryOpen(true)}
          >
            Add Category
          </Button>
          <FormControl
            style={{
              width: isSmallScreen ? "90%" : "20%",
              marginTop: isSmallScreen && "15px",
            }}
          >
            <InputLabel>Type</InputLabel>
            <Select
              label="type"
              {...register("type")}
              onChange={({ target: { value } }) => setSelectedType(value)}
              defaultValue={selectedProductToUpdate?.type || ""}
            >
              <MenuItem value={"men"}>Men</MenuItem>
              <MenuItem value={"women"}>Women</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{
              width: isSmallScreen ? "90%" : "23%",
              marginTop: isSmallScreen && "15px",
            }}
          >
            <InputLabel>Category</InputLabel>
            <Select
              label="category"
              {...register("category")}
              onChange={({ target: { value } }) => setSelectedCategory(value)}
              defaultValue={selectedProductToUpdate?.category || ""}
              style={{ height: "55px" }}
            >
              {categories
                ?.filter(({ type }) => type === selectedType)
                ?.map(({ category, _id }) => {
                  return (
                    <MenuItem value={category}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <ListItemText style={{ overflow: "hidden" }}>
                          {category}
                        </ListItemText>
                        <>
                          <Button
                            onClick={() => {
                              setSelectedIdFroAction(_id);
                              setIsEditCategoryPopupOpen(true);
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            color="error"
                            onClick={() => {
                              setSelectedIdFroAction(_id);
                              setIsDeleteCategoryPopupOpen(true);
                            }}
                          >
                            Delete
                          </Button>
                        </>
                      </div>
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          {fields.map(({ key, label, type }) => (
            <TextField
              required
              name={key}
              label={label}
              type={type}
              variant="outlined"
              multiline={key === "description"}
              defaultValue={selectedProductToUpdate?.[key]}
              style={fieldStyle(isSmallScreen)}
              {...register(key)}
            />
          ))}
        </FormContainer>
      </Collapse>
    </>
  );
}
