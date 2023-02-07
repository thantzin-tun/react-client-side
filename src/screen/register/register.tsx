import React, { useEffect, useState} from "react";
import { Formik, Form, ErrorMessage} from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "hook/auth";
import { ErroLabel, InputFieldStyle, TextCom } from "theme";

import { useSelector } from "react-redux";

import "../login/login.scss";

import { message } from "assets";
import { getToken } from "service";

type RegisterProps = {
  setBol?: any;
};

const initialValues = {
  name: "",
  email: "",
  password: "",
  retype_password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Enter you firstName"),
  // profileImg: Yup.mixed().test("type", "png,jpeg and jpg format", function (value) {
  //   return value && (value.type === "image/jpg" || value.type === "image/jpeg" || value.type === "image/png");
  // }).required("upload your photo more fun"),
  // phone: Yup.string()
  //   .min(8, "Fill correct phone number")
  //   .required("Enter you phonenumber"),
  // address: Yup.string()
  //   .min(2, "Enter you complete address!")
  //   .required("Enter you address"),
  profileImg: Yup.string(),
  email: Yup.string().email("Invalid email").required("Enter your email"),
  password: Yup.string()
    .required("Please Enter your password")
    .min(8, "Password must have at least 8 charaters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{3,30})/,
      "Password Not Strong!"
    ),
  retype_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const Register: React.FC<RegisterProps> = () => {

  const navigate = useNavigate();

  const { register_auth, dispatch, userData } = useAuth();

  const [img,setImg] = useState<any>("");

  // const token = useSelector((state:any) => state.auth.token);
  const token = getToken();
  const onSubmit = (values: any, { resetForm }: any) => {
    let formData = new FormData();
    formData.set('name', values.name);
    formData.set('email', values.email);
    formData.set('password', values.password);
    formData.set("profileImg",img);
    dispatch(register_auth(formData));
  };

  

  useEffect(() => {
    if(token) {
        navigate("/");
    }
    else if(userData?.status === true) {
      navigate("/verify");
  } 
  },[userData?.status]);
 

  console.log("Register components is running!");


  return (
    <>
      <div className="main login-background">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-7">
              <div className="login-form">
                <div className="left">
                  {
                    userData?.message
                    ?
                  <div className="alert-box">
                    <TextCom fontSize="md" weight="600" color="light">{userData.message}</TextCom>
                  </div>
                  :
                  null
                  }
                  <img src={message} className="img-logo" alt="message-logo" />
                  <TextCom
                    color="primary"
                    fontSize="xxxxl"
                    align="center"
                    fontStyle="italic"
                    className="mb-2"
                  >
                    Messaging
                  </TextCom>
                  <div className="part_register">
                    <div className="form">
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                      >
                        <Form encType="multipart/form-data">
                          <div className="two-input d-flex justify-content-between align-items-center">

                            <div className="col me-2">
                              <div className="mb-2">
                                <TextCom color="dark" fontSize="md">
                                  User Name
                                </TextCom>
                                <InputFieldStyle
                                  type="text"
                                  name="name"
                                  autoCorrect="off"
                                  autoComplete="off"
                                  placeholder="Enter you name"
                                  border_radius={5}
                                ></InputFieldStyle>
                                <ErroLabel color="danger" weight="600">
                                  <ErrorMessage name="name">
                                    {(message: string) =>
                                      message ? (
                                        <div>
                                          <i className="fa-solid fa-circle-exclamation text-danger me-1"></i>
                                          {message}
                                        </div>
                                      ) : null
                                    }
                                  </ErrorMessage>
                                </ErroLabel>
                              </div>
                            </div>
                            <div className="col">
                              <div className="mb-2">
                                <TextCom color="dark" fontSize="md">
                                  Upload Profile
                                </TextCom>

                                <input type="file"
                                onChange={(e: any) => setImg(e.target.files[0])} className="w-100 file"/>
                              </div>
                            </div>
                          </div>

                          <div className="two-input d-flex justify-content-between align-items-center">
                            <div className="col">
                              <div className="mb-2">
                                <TextCom color="dark" fontSize="md">
                                  Email
                                </TextCom>
                                <InputFieldStyle
                                  type="text"
                                  name="email"
                                  autoCorrect="off"
                                  autoComplete="off"
                                  placeholder="Enter you email"
                                  border_radius={5}
                                ></InputFieldStyle>
                                <ErroLabel color="danger" weight="600">
                                  <ErrorMessage name="email">
                                    {(message: string) => (
                                      <div>
                                        <i className="fa-solid fa-circle-exclamation text-danger me-1"></i>
                                        {message}
                                      </div>
                                    )}
                                  </ErrorMessage>
                                </ErroLabel>
                              </div>
                            </div>
                          </div>

                          <div className="mb-2">
                            <TextCom color="dark" fontSize="md">
                              Password
                            </TextCom>
                            <InputFieldStyle
                              type="password"
                              name="password"
                              autoCorrect="off"
                              autoComplete="off"
                              placeholder="Enter you password"
                              border_radius={5}
                            ></InputFieldStyle>
                            <ErroLabel color="danger" weight="600">
                              <ErrorMessage name="password">
                                {(message: string) => (
                                  <div>
                                    <i className="fa-solid fa-circle-exclamation text-danger me-1"></i>
                                    {message}
                                  </div>
                                )}
                              </ErrorMessage>
                            </ErroLabel>
                          </div>

                          <div className="mb-3">
                            <TextCom color="dark" fontSize="md">
                              Retype Password
                            </TextCom>
                            <InputFieldStyle
                              type="password"
                              name="retype_password"
                              autoCorrect="off"
                              autoComplete="off"
                              border_radius={5}
                              placeholder="retype password"
                            ></InputFieldStyle>
                            <ErroLabel color="danger" weight="600">
                              <ErrorMessage name="retype_password">
                                {(message: string) => (
                                  <div>
                                    <i className="fa-solid fa-circle-exclamation text-danger me-1"></i>
                                    {message}
                                  </div>
                                )}
                              </ErrorMessage>
                            </ErroLabel>
                          </div>

                          <button className="form-button" type="submit">
                            Sing Up
                          </button>

                          <div className="text justify-content-center my-3 d-flex">
                            <TextCom
                              fontSize="sm"
                              weight="lg"
                              color="gray"
                              className="me-1"
                            >
                              Already have an account?
                            </TextCom>
                            <Link to="/">
                              <TextCom color="red" fontSize="sm">
                                Sign In
                              </TextCom>
                            </Link>
                          </div>
                        </Form>
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

