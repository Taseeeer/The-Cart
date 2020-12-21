import React from "react";
import {FaCartArrowDown} from "react-icons/fa";

const Navbar = (props) => {
    return (
        <div style={style.set}>
            <FaCartArrowDown style={style.cart} />
            <span style={style.span}>{props.onCount}</span>
        </div>
    );
}

const style = {
    set: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        minHeight: "10vh",
        background: "rgb(12, 135, 242)",
    },
    
    cart : {
        fontSize: "3.2rem",
        margin: "0 2rem",
        color: "white",
    },

    span: {
       background: "red",
       borderRadius: "50%",
       fontSize: "1.8rem",
       fontFamily: "monospace",
       padding: "2px 8px",
       position: "absolute",
       top : "19px",
       color: "white", 
    }
}

export default Navbar;