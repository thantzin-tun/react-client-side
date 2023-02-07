import React, { useEffect,useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useAuth } from "hook/auth";

import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

import { mail, security } from "assets";

import { TextCom, InputFieldStyle, ErroLabel } from "theme";

import "./login.scss";

import { InputField } from "components";
import { google, message } from "assets";
import { Link} from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { getToken} from "service";

type LoginProps = {
  children?: (message: string) => React.ReactNode;
};

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required(),
  password: Yup.string().required(),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
  //   "Password Not Strong!"
  // ),
});

export const Login: React.FC<LoginProps> = () => {

  const navigate = useNavigate();

  const user_token = useSelector((state: any) => state?.token);
  let token = getToken();

  const { login_auth, dispatch, google_auth,userData } = useAuth();

  const [permision,setPermision] = useState<boolean>(false);


  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "gooogle client ID",
      plugin_name: "mern-chat-app",
    });
  });

  const onSubmit = (values: any, { resetForm }: any) => {
    dispatch(login_auth(values));
    // resetForm({ values: "" });
  };

  const responseGoogle = (response: any) => {
    dispatch(google_auth({ tokenId: response.tokenId }));
  };

  useEffect(() => {
      if(token){
          navigate("/");
      }
  },[])

  console.log("Login Components is running!", user_token);

  return (
    <>
      <div className="main login-background">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-7">
              <div className="login-form">
                <div className="left">
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

                  <div className="part_login">
                    <GoogleLogin
                      clientId="google client id"
                      buttonText="Login in with Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}
                      render={(renderProps) => (
                        <button
                          className="google d-flex align-items-center"
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          <img
                            src={google}
                            alt="googleLogo"
                            className=""
                            width="28px"
                          />
                          <TextCom
                            color="light"
                            fontSize="md"
                            className="flex-grow-1"
                            letterSpacing={0.5}
                            align="center"
                          >
                            Log in with Google
                          </TextCom>
                        </button>
                      )}
                    />

                    <div className="text justify-content-center my-3 d-flex">
                      <TextCom fontSize="sm" weight="lg" color="gray">
                        Or | Login with Account
                      </TextCom>
                    </div>
                    <div className="form">
                      <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                      >
                        <Form>
                          <div className="mb-3">
                            <TextCom color="dark" fontSize="md">
                              Email
                            </TextCom>
                            <InputField icon={mail} iconPosition="left">
                              <InputFieldStyle
                                type="email"
                                name="email"
                                autoCorrect="off"
                                autoComplete="off"
                                border_radius={5}
                                paddingleft={55}
                              ></InputFieldStyle>
                            </InputField>

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
                          <div className="mb-3">
                            <TextCom color="dark" fontSize="md">
                              Password
                            </TextCom>

                            <InputField icon={security} iconPosition="left">
                              <InputFieldStyle
                                type="password"
                                name="password"
                                autoCorrect="off"
                                autoComplete="off"
                                border_radius={5}
                                paddingleft={55}
                              ></InputFieldStyle>
                            </InputField>

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
                          <button className="form-button" type="submit">
                            Sing In
                          </button>
                          <div className="text justify-content-center my-3 d-flex">
                            <TextCom
                              fontSize="sm"
                              weight="lg"
                              color="gray"
                              className="me-1"
                            >
                              Don't have an account?
                            </TextCom>
                            <Link to="/register">
                              <TextCom
                                color="red"
                                fontSize="sm"
                              >
                                Sign Up
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
