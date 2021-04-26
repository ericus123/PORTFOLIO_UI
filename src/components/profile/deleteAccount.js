import React,{useState,useEffect} from "react";
import "../scss/styles.scss";
import { useSelector, useDispatch } from "react-redux";
import {deleteAccount} from "../../redux/actions/profile/profile";
import { Spinner} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { simpleAlert } from "../Alerts";



const DeleteAccount = ()  => {
    const deleteAccountError = useSelector((state) => state.deleteAccount.error);
    const deleteAccountMessage = useSelector((state) => state.deleteAccount.message);
    const deleteAccountIsLoading = useSelector((state) => state.deleteAccount.isLoading);
   const {token} = useParams();
   const dispatch = useDispatch();
    useEffect(() => {
        dispatch(deleteAccount(token))
    },[token])
  return (
      <div className="del_acc">
          {deleteAccountError ? simpleAlert("danger",deleteAccountError) : null}
          {deleteAccountMessage ? simpleAlert("success",deleteAccountMessage) : null}
          {deleteAccountIsLoading ?  <div style={{ textAlign: "center" }}>
                  <Spinner animation="border" size="md" role="status"></Spinner>
                </div> : null}
      </div>
  )
}

export default DeleteAccount;