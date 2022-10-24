import * as yup from "yup";

const REQUIRED = "Required";

export const registrationSchema = yup.object().shape({
  firstName: yup.string().required(REQUIRED),
  lastName: yup.string().required(REQUIRED),
  email: yup.string().email("Please enter a valid email").required(REQUIRED),
  password: yup.string().min(6).required(REQUIRED),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must be matched")
    .required(REQUIRED),
});
