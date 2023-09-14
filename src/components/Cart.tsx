'use client'

import Button from "./Button";
import { useGlobalContext } from "@/app/Context/store";
import CartCard from "./CartCard";


export default function Cart(){
    const { cartProducts, cartOpen, setCartOpen } = useGlobalContext();
    const totalCost = cartProducts.reduce((accumulator, product) => {
        return accumulator + product.price * product.quantity;
    }, 0);
    
    return (
    <section
    role="cart"
    className={`bg-white z-10 p-4 w-100 sm:w-100 h-80 absolute top-20 right-0 ${
        cartOpen ? "visible" : "hidden"} overflow-y-scroll border border-grey-100`}
    >
    <div className="flex items-center p-6">
        <button onClick={() => setCartOpen(false)}>
        <i className="fa-solid fa-xmark"></i>
        </button>
        <h4 className="text-center w-full">Shopping Cart</h4>
        <p>Items: {cartProducts.length}</p>
    </div>
    {
        cartProducts.map((product) => (
            <CartCard product={product} key={product.id}/>
        ))
    }

    <div className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4" role="estimated total">
    <p className="text-lg font-semibold">Estimated Total</p>
    <p className="text-xl font-bold text-black">${totalCost.toFixed(2)} USD</p>
    </div>

    </section>
    );
}