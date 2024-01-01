import React from "react";
import ReactDom from "react-dom";
import "./Backdrop.css";
const Backdrop = (props) => {
  const backdropHandler = ()=>{
    props.onClickBackdrop()
  }
  return ReactDom.createPortal(
    <div className="backdrop" onClick={backdropHandler}>
       
    </div>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
