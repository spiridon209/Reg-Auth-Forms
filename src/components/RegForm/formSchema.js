import * as Yup from "yup";

const formSchema = Yup.object().shape({
  username: Yup.string().max(20, "Must be shorter").required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Must be longer than 8 characters")
    .max(40, "Must be shorter")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "Must have one Big or more letter and one or more number"
    )
    .required("Required"),
});
export default formSchema;
