'use client'

import Button from "./Button";
import { useGlobalContext } from "@/app/Context/store";
import CartCard from "./CartCard";


export default function Cart({cartOpen, handleClick} : {
    cartOpen: boolean,
    handleClick: () => void,
}){
    const { cartProducts } = useGlobalContext();
    const totalCost = cartProducts.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);
    
    return (
    <section
    role="cart"
    className={`bg-white z-10 p-4 w-100 sm:w-120 h-screen absolute top-20 right-0 ${
        cartOpen ? "visible" : "hidden"}`}
    >
    <div className="flex items-center p-6">
        <Button handleClick={handleClick}>
        <i className="fa-solid fa-xmark"></i>
        </Button>
        <h4 className="text-center w-full">Shopping Cart</h4>
    </div>
    {
        cartProducts.map((product) => (
            <CartCard product={product} key={product.id}/>
        ))
    }
    <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4">
    <p className="text-lg font-semibold">Estimated Total</p>
    <p className="text-xl font-bold text-black">${totalCost.toFixed(2)} USD</p>
    </div>

    </section>
    );
}