import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email").required("Required"),
  password: yup.string().min(6).required("Required"),
});
