import React from "react";
import ReactDom from "react-dom";
import "./Backdrop.css";
const Backdrop = () => {
  return ReactDom.createPortal(
    <div className="backdrop">
       
    </div>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
