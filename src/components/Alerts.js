import React from "react";
import { Alert } from "react-bootstrap";


export const simpleAlert = (v,m) => {
  // const {variant,msg} = props.data;
  return <Alert variant={v} style={{ textAlign: "center" }}>{m}</Alert>
}

