import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useEditCategoryQuery } from "../../../../../apis/categories/editCategory";

export default function EditCategoryPopup({
  isEditCategoryOpen,
  setIsEditCategoryOpen,
  formUtils,
  refreshCategories,
  selectedIdForAction,
}) {
  const { register, getValues, setValue } = formUtils;
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
    handleApiCall(selectedIdForAction, { category: getValues()?.category });
  };

  return (
    <Dialog open={isEditCategoryOpen} onClose={handleClose} fullWidth>
      <DialogTitle>Edit Category</DialogTitle>
      <DialogContent>
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
