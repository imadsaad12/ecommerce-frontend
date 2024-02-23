import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LoadingButton } from "@mui/lab";
import { useDeleteProductQuery } from "../../../apis/products/deleteProduct";

export default function DeleteProductPopup({
  setIsDeleteProductPopupOpen,
  isDeleteProductPopupOpen,
  selectedIdForAction,
  refetchProducts,
}) {
  const { handleApiCall, isPending } = useDeleteProductQuery({
    onSuccess: () => {
      refetchProducts();
      setIsDeleteProductPopupOpen(false);
      window.location.reload();
    },
  });

  const handleClose = () => {
    setIsDeleteProductPopupOpen(false);
  };

  const handleSubmit = () => {
    handleApiCall(selectedIdForAction);
  };

  return (
    <Dialog open={isDeleteProductPopupOpen} onClose={handleClose}>
      <DialogTitle>Delete product</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this product ?
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
