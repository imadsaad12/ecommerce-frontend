import React from "react";
import {
  Container,
  WhiteBorderTextField,
  inputStyle,
  nameInputStyle,
} from "./styles";
import { LoadingButton } from "@mui/lab";
import useBreakpoint from "../../../utilities/mediaQuery";
import { breakingPoints } from "../../../global/theme";
import { useAddOrderQuery } from "../../../apis/orders/addOrder";
import { formatOrder } from "../../../utilities/formatOrders";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "./yup-shape";
import { isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import { resetCart } from "../../../redux/cart/cartActions";

export default function AddressInformation({
  data,
  totalPrice,
  setIsFormOpen,
}) {
  const isSmallScreen = useBreakpoint(breakingPoints.sm);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(orderSchema),
  });
  const dispatch = useDispatch();

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
      type: "string",
      required: true,
    },
  ];

  const { handleApiCall, isPending } = useAddOrderQuery({
    onSuccess: () => {
      dispatch(resetCart());
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
      <WhiteBorderTextField
        style={nameInputStyle(isSmallScreen)}
        name="clientFullName"
        label="Full name"
        {...register("clientFullName")}
        error={!isEmpty(formState?.errors?.clientFullName)}
        helperText={
          !isEmpty(formState?.errors?.clientFullName) &&
          formState.errors?.clientFullName.message
        }
      />

      {fields.map(({ name, label, type }) => (
        <WhiteBorderTextField
          style={inputStyle(isSmallScreen)}
          name={name}
          label={label}
          type={type}
          {...register(name)}
          error={!isEmpty(formState?.errors?.[name])}
          helperText={
            !isEmpty(formState?.errors?.[name]) &&
            formState.errors?.[name].message
          }
        />
      ))}
      <LoadingButton
        style={{ width: "calc(80% + 20px)", marginBottom: "50px" }}
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
