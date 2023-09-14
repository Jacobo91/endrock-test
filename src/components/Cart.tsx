"use client";

import { useGlobalContext } from "@/app/Context/store";
import CartCard from "./CartCard";
import Swal from "sweetalert2";

export default function Cart() {
const { cartProducts, setCartProducts, cartOpen, setCartOpen } =
useGlobalContext();
const totalCost = cartProducts.reduce((accumulator, product) => {
return accumulator + product.price * product.quantity;
}, 0);

function handleCheckout() {
setCartProducts([]);
setCartOpen(false);
Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Thanks for your purchase",
    showConfirmButton: false,
    timer: 1500,
});
}

return (
<section
    role="cart"
    className={`bg-white z-10 p-4 w-80 sm:w-1/2 h-80 absolute top-20 right-0 ${
    cartOpen ? "visible" : "hidden"
    } overflow-y-scroll border border-grey-100`}
>
    <div className="flex items-center p-6">
    <button onClick={() => setCartOpen(false)}>
        <i className="fa-solid fa-xmark"></i>
    </button>
    <h4 className="text-center w-full">Shopping Cart</h4>
    <p>Items:{cartProducts.length}</p>
    </div>
    {cartProducts.map((product) => (
    <CartCard product={product} key={product.id} />
    ))}
    <>
    {cartProducts.length === 0 ? (
        <p>Your Cart is empty</p>
    ) : (
        <>
        <div
            className="flex justify-between items-center border-t border-gray-300 pt-4 mt-4"
            role="estimated total"
        >
            <p className="text-lg font-semibold">Estimated Total</p>
            <p className="text-xl font-bold text-black">
            ${totalCost.toFixed(2)} USD
            </p>
        </div>

        <button
            className="my-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4  shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleCheckout}
        >
            Checkout
        </button>
        </>
    )}
    </>
</section>
);
}
