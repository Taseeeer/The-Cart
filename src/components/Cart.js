import React from "react";
import CartItem from "./CartItem";


class Cart extends React.Component{

    // constructor(){
    //     super();

    //     this.state = {
    //         allproducts : [
    //             {
    //                 id: 0,
    //                 title: "Mac Mini",
    //                 price: "140000",
    //                 quantity: 5,
    //                 img: "",
    //             },
    //             {
    //                 id: 1,
    //                 title: "RTX 2080",
    //                 price: "77000",
    //                 quantity: 3,
    //                 img: "",
    //             },
    //             {
    //                 id: 2,
    //                 title: "iPad",
    //                 price: "99999",
    //                 quantity: 2, 
    //                 img: "",
    //             },
    //         ],  
    //     }
    // };



    render(){

        const {allproducts} = this.props.product;
        const {onDecrease, onIncrease, onDelete} = this.props;

        console.log()
        return(
            <div style={{minHeight: "79vh"}}>
                {allproducts.map(product => {
                    return <CartItem key={product.id} product={product} 
                            onIncrease={onIncrease} onDecrease={onDecrease} onDelete={onDelete}/>
                })}
            </div>
        );
    }
}

export default Cart;