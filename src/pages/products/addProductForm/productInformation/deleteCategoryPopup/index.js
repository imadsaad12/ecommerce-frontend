import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDeleteCategoryQuery } from "../../../../../apis/categories/deleteCategory";
import { LoadingButton } from "@mui/lab";

export default function DeleteProductPopup({
  setIsDeleteCategoryPopupOpen,
  isDeleteCategoryPopupOpen,
  refreshCategories,
  selectedIdForAction,
}) {
  const { handleApiCall, isPending } = useDeleteCategoryQuery({
    onSuccess: () => {
      refreshCategories();
      setIsDeleteCategoryPopupOpen(false);
    },
  });

  const handleClose = () => {
    setIsDeleteCategoryPopupOpen(false);
  };

  const handleSubmit = () => {
    handleApiCall(selectedIdForAction);
  };

  return (
    <Dialog open={isDeleteCategoryPopupOpen} onClose={handleClose}>
      <DialogTitle>Delete Category</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this category with all its products ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
          onClick={handleSubmit}
          loading={isPending}
          loadingPosition="start"
        >
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
