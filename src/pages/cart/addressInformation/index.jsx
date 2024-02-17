import React from "react";
import { Container, inputStyle, nameInputStyle } from "./styles";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import useBreakpoint from "../../../utilities/mediaQuery";
import { breakingPoints } from "../../../global/theme";
import { useAddOrderQuery } from "../../../apis/orders/addOrder";
import { formatOrder } from "../../../utilities/formatOrders";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

export default function AddressInformation({
  data,
  totalPrice,
  setIsFormOpen,
}) {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const { register, handleSubmit, setValue } = useForm();
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "phoneNumber",
      label: "Phone number",
      type: "string",
      required: true,
    },
    {
      name: "region",
      label: "Region",
      type: "string",
      required: true,
    },
    {
      name: "street",
      label: "Street",
      type: "string",
      required: true,
    },
    {
      name: "building",
      label: "Building",
      type: "string",
      required: true,
    },
    {
      name: "floor",
      label: "Floor",
      type: "number",
      required: true,
    },
  ];

  const { handleApiCall, isPending } = useAddOrderQuery({
    onSuccess: () => {
      setIsFormOpen(false);
      toast.success("You order is on its way!!", {
        style: { marginTop: "60px" },
      });
    },
  });

  const handleOnOrder = () => {
    handleSubmit((inputData) => {
      handleApiCall({ ...inputData, ...formatOrder(data, totalPrice) });
    })();
  };

  return (
    <Container>
      <TextField
        style={nameInputStyle(isSmallScreen)}
        name="clientFullName"
        label="Full name"
        {...register("clientFullName")}
      />

      {fields.map(({ name, label, type }) => (
        <TextField
          style={inputStyle(isSmallScreen)}
          name={name}
          label={label}
          type={type}
          {...register(name)}
        />
      ))}
      <LoadingButton
        style={{ width: "calc(80% + 20px)" }}
        variant="contained"
        color="success"
        loading={isPending}
        onClick={handleOnOrder}
      >
        order now
      </LoadingButton>
    </Container>
  );
}
