import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAddCategoryQuery } from "../../../../../apis/categories/addCategory";
import { LoadingButton } from "@mui/lab";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function AddCategoryPopup({
  isAddCategoryOpen,
  setIsAddCategoryOpen,
  formUtils,
  refreshCategories,
}) {
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
      category: getValues()?.categoryName,
      type: getValues()?.categoryType,
    });

  return (
    <Dialog open={isAddCategoryOpen} onClose={handleClose} fullWidth>
      <DialogTitle>Add Category</DialogTitle>
      <DialogContent>
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
