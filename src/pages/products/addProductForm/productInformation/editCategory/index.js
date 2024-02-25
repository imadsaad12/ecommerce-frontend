import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useEditCategoryQuery } from "../../../../../apis/categories/editCategory";
import { v4 as uuidv4 } from "uuid";
import {
  FileInput,
  Image,
  ImageContainer,
  UploadContainer,
} from "../addCategoryPopup/styles";
import { useDispatch, useSelector } from "react-redux";

export default function EditCategoryPopup({
  isEditCategoryOpen,
  setIsEditCategoryOpen,
  formUtils,
  refreshCategories,
  selectedIdForAction,
  categories,
}) {
  const { register, getValues, setValue } = formUtils;
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const categoryImage = categories?.find(
      (elm) => elm._id === selectedIdForAction
    )?.imageUrl;

    if (categoryImage) {
      setImageUrl(
        `https://storage.googleapis.com/ecommerce-bucket-testing/${categoryImage}`
      );
    }
    return () => {
      setImageUrl("");
      setFile(null);
    };
  }, [selectedIdForAction]);

  const { handleApiCall, isPending } = useEditCategoryQuery({
    onSuccess: () => {
      refreshCategories();
      setIsEditCategoryOpen(false);
      setValue("category", undefined);
    },
  });

  const handleClose = () => {
    setIsEditCategoryOpen(false);
  };

  const handleSubmit = () => {
    handleApiCall(selectedIdForAction, {
      category: getValues()?.category,
      file,
    });
  };

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
    <Dialog open={isEditCategoryOpen} onClose={handleClose} fullWidth>
      <DialogTitle>Edit Category</DialogTitle>
      <DialogContent
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          autoFocus
          required
          name="category"
          label="Category name"
          fullWidth
          variant="standard"
          {...register("category")}
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
          Edit
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
