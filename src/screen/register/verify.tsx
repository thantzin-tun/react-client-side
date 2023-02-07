import React, { useEffect, useState } from "react";
import { TextCom } from "theme";

import { bigEmail } from "assets";

import { useNavigate } from "react-router-dom";

import "../login/login.scss"

import client from '../../url/index'
import { getToken } from "service";
import { useAuth } from "hook";
import {Modal,Button} from 'react-bootstrap';


type VerifyEmailProps = {
    post?: any
};

export const VerifyCom: React.FC<VerifyEmailProps> = () => {

    const navigate = useNavigate();
    const [digit, setDigit] = useState<any>("");

    const [verify,setVerify] = useState<any>("");

    // const token = useSelector((state: any) => state.auth.token);
    const token = getToken();
    const { userData,changeStatus,dispatch} = useAuth();

    const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const checkVerifyCode = async (digit: any) => {
        let response = await client.post("/email/verify", {
            verifyCode: digit
        })
        if(response.data) {
            setVerify(response.data);
            handleShow();
        }
        else {
            return
        }
    }

    let sendDigitToServer = (e: any) => {
        e.preventDefault();
        if (digit !== "") {
            checkVerifyCode(digit);
        }
        else {
            alert("Sorry");
        }
    }
    
    const cc = () => {
        dispatch(changeStatus());
        navigate("/register");
    }
    
    const toLogin = () => {
        dispatch(changeStatus());
        navigate("/login")
    }

    useEffect(() => {
        if(token) {
            navigate("/");
        }
        else if (!userData.status){
            navigate("/register");
        }
      },[]);

      console.log("Verify Components is running!");

    return (
        <>
            <div className="login-background">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-7 h-100 mt-5">
                            <div className="card shadow p-4 d-flex justify-content-center align-items-center">
                                <TextCom weight={600} fontSize="xxxl" align="center">
                                    Verify Your Account
                                </TextCom>
                                <img src={bigEmail} alt="" width="100px" className="my-3" />
                                <TextCom fontSize="md" className="mb-3">
                                    Hello, my friends
                                </TextCom>
                                <input
                                    className="form-control mb-3 w-50"
                                    type="text"
                                    placeholder="Enter verify code"
                                    onChange={(e) => setDigit(e.target.value)}
                                />
                                <button type="submit" onClick={sendDigitToServer}
                                    className={`btn mb-3 ${digit === "" ? "btn-danger" : "btn-primary"}`}
                                    disabled={digit === "" ? true : false}
                                >Submit</button>
                            <TextCom align="center" weight={500} fontSize="lg">
                                Thank you very much join with our.We sent email to your
                                account.Please verify your account.
                            </TextCom>
                            <TextCom align="center" weight={500} fontSize="sm" className="my-2" color="red">
                                Don't you receive any verification code? 
                            </TextCom>
                            <button className="btn btn-dark"
                            onClick={cc}
                            > Go Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>{verify.message}</Modal.Body>
        <Modal.Footer>
        {
            verify.verify === true
            ?
            <Button variant="primary" onClick={toLogin}>
              Go to Login Page
            </Button>
          :
        <Button variant="secondary" onClick={handleClose}>
            Retype Code
        </Button>
        }    
        </Modal.Footer>
      </Modal>
        </>
    );
};
