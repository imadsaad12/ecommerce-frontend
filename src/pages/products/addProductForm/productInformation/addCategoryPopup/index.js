import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAddCategoryQuery } from "../../../../../apis/categories/addCategory";
import { LoadingButton } from "@mui/lab";

export default function AddCategoryPopup({
  isAddCategoryOpen,
  setIsAddCategoryOpen,
  formUtils,
}) {
  const { register, getValues } = formUtils;
  const { handleApiCall, isPending } = useAddCategoryQuery({
    onSuccess: () => setIsAddCategoryOpen(false),
  });

  const handleClose = () => {
    setIsAddCategoryOpen(false);
  };

  const handleSubmit = () => handleApiCall({ category: getValues()?.category });

  return (
    <Dialog open={isAddCategoryOpen} onClose={handleClose} fullWidth>
      <DialogTitle>Add Category</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          name="email"
          label="Category name"
          type="email"
          fullWidth
          variant="standard"
          {...register("category")}
        />
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
