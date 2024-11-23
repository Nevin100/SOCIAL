import { useState } from "react";
import {
  Box,
  Button,
  textField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import EditOutlineIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "states";
import Dropzone from "react-dropzone/.";
import FlexBetween from "Components/Flexbetween";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initalValuesRegister = {
  firstname: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initalValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setpageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const isNonMobile = useMediaQuery("(min-width:600px");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const handleSubmit = async();
};

export default Form;