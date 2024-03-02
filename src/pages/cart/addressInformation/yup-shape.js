import * as yup from "yup";

export const orderSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(
      /^[0-9]*$/,
      "Phone must contain only numbers(no spaces or special characters)"
    )
    .length(8, "The phone number must be exactly 8 digits in length.")
    .required(),
  clientFullName: yup.string().required("Please enter full name"),
  email: yup.string().email().required("Please enter your email"),
  region: yup
    .string()
    .matches(
      /^[a-zA-Z\s]+$/,
      "Region must contain only alphabetical characters"
    )
    .required("Please enter your region"),
  street: yup
    .string()
    .matches(
      /^[a-zA-Z\s]+$/,
      "Street must contain only alphabetical characters"
    )
    .required("Please enter your street"),
  building: yup.string().required("Please enter your building"),
  floor: yup
    .string()
    .matches(/^[0-9]*$/, "Floor must contain only numbers")
    .required("Please enter your floor"),
});
