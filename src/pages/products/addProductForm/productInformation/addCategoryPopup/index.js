import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAddCategoryQuery } from "../../../../../apis/categories/addCategory";
import { LoadingButton } from "@mui/lab";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FileInput, Image, ImageContainer, UploadContainer } from "./styles";
import { v4 as uuidv4 } from "uuid";

export default function AddCategoryPopup({
  isAddCategoryOpen,
  setIsAddCategoryOpen,
  formUtils,
  refreshCategories,
}) {
  const [file, setFile] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const { register, getValues, setValue } = formUtils;
  const { handleApiCall, isPending } = useAddCategoryQuery({
    onSuccess: () => {
      refreshCategories();
      setIsAddCategoryOpen(false);
      setValue("categoryName", "");
      setValue("categoryType", "");
    },
  });

  const handleClose = () => {
    setIsAddCategoryOpen(false);
  };

  const handleSubmit = () =>
    handleApiCall({
      category: getValues()?.categoryName.toLowerCase(),
      type: getValues()?.categoryType,
      file,
    });

  const fileInputRef = useRef(null);

  const openFileInput = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const uniqueId = uuidv4();
    const modifiedFileName = `${uniqueId}`;
    const modifiedFile = new File([selectedFile], modifiedFileName, {
      type: selectedFile.type,
    });
    const url = URL.createObjectURL(selectedFile);
    setImageUrl(url);

    if (modifiedFile) {
      setFile(modifiedFile);
    }
  };

  return (
    <Dialog open={isAddCategoryOpen} onClose={handleClose} fullWidth>
      <DialogTitle>Add Category</DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormControl style={{ width: "100%", marginTop: "15px" }}>
          <InputLabel>Type</InputLabel>
          <Select label="type" {...register("categoryType")}>
            <MenuItem value={"men"}>Men</MenuItem>
            <MenuItem value={"women"}>Women</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          name="email"
          label="Category name"
          type="email"
          fullWidth
          variant="standard"
          {...register("categoryName")}
          style={{ marginTop: "15px" }}
        />
        {imageUrl !== "" ? (
          <ImageContainer>
            <Image src={imageUrl} />
            <Button
              variant="outlined"
              color="error"
              style={{
                width: "100px",
                height: "50px",
              }}
              onClick={() => {
                setImageUrl("");
                setFile(null);
              }}
            >
              Delete
            </Button>
          </ImageContainer>
        ) : (
          <UploadContainer onClick={openFileInput}>
            Click to image for category
            <FileInput
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleFileChange}
            />
          </UploadContainer>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
          onClick={handleSubmit}
          loading={isPending}
          loadingPosition="start"
        >
          Add
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
