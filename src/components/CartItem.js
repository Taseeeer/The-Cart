import React from "react";
import {FaPlusSquare} from "react-icons/fa";
import {FaMinusSquare} from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";


class CartItem extends React.Component{

    // constructor(){
    //     super();

    //     this.state = {
    //        products : [
    //             {
    //                 id: 0,
    //                 title: "Mac Mini",
    //                 price: "140000",
    //                 quantity: "5",
    //                 img: "",
    //             },
    //             {
    //                 id: 1,
    //                 title: "RTX 2080",
    //                 price: "77000",
    //                 quantity: "3",
    //                 img: "",
    //             },
    //             {
    //                 id: 2,
    //                 title: "iPad",
    //                 price: "99999",
    //                 quantity: "2",
    //                 img: "",
    //             },
    //         ],  
    //     }
    // }

    render(){

        const {title, price, quantity, img} = this.props.product;

        return(
            <div style={{display: "flex"}}>
                <img style={style.image} src={img} />
                <div style={style.set}>
                    <div style={style.details}>{title}</div>
                    <div style={style.details}>{price}</div>
                    <div style={style.details}>{quantity}</div>

                    <div style={{display: "flex", cursor: "pointer", fontSize: "2rem", margin: ".5rem 1rem", padding:".2rem .2rem"}}>
                        <FaPlusSquare onClick={() => this.props.onIncrease(this.props.product)}/>
                        <FaMinusSquare onClick={() => this.props.onDecrease(this.props.product)}/>
                        <FaTrashAlt onClick={() => this.props.onDelete(this.props.product.id)}/>
                    </div>
                </div>
            </div>
        );
    }
}

const style = {
    image: {
        height: 170,
        width: 170,
        margin: "1rem 1rem",
        borderRadius: 4,
        background: "gray",
    },
    
    details: {
        fontSize: "2rem",
        fontFamily: "monospace",
        margin: "0 1rem",
        marginTop: "1rem",
    },
    
    set: {
        display: "flex",
        flexDirection: "column",
    }
}

export default CartItem;