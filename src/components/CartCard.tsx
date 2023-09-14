"use client";

import { useGlobalContext } from "@/app/Context/store";

export interface CartProduct {
id: number;
quantity: number;
title: string;
price: number;
description: string;
category: string;
image: string;
rating: {
rate: number;
count: number;
};
}

export default function CartCard({ product }: { product: CartProduct }) {
const { cartProducts, setCartProducts } = useGlobalContext();

function onRemove(id: number) {
const cartCopy = [...cartProducts];
const updatedCart = cartCopy.filter((product) => product.id !== id);
setCartProducts(updatedCart);
}

function onIncrease(product: CartProduct) {
const updatedCartProducts = cartProducts.map((cartProduct) => {
    if (cartProduct.id === product.id) {
    return { ...cartProduct, quantity: cartProduct.quantity + 1 };
    }

    return cartProduct;
});

setCartProducts(updatedCartProducts);
}

function onDecrease(product: CartProduct) {
const updatedCartProducts = cartProducts.map((cartProduct) => {
    if (cartProduct.id === product.id) {
    // Ensure the quantity doesn't go below 1
    const newQuantity = Math.max(1, cartProduct.quantity - 1);
    return { ...cartProduct, quantity: newQuantity };
    }
    return cartProduct;
});

setCartProducts(updatedCartProducts);
}

return (
<div className="flex items-center border-b border-gray-300 py-4">
    <div className="w-1/4">
    <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-cover"
    />
    </div>
    <div className="w-1/2 px-4">
    <h2 className="text-lg font-semibold">{product.title}</h2>
    <p className="text-gray-600">
        ${(product.price * product.quantity).toFixed(2)}
    </p>
    </div>

    <div className="w-1/4 h-20 text-right relative">

    <div className="w-full text-right mb-6">
        <button
        onClick={() => onRemove(product.id)}
        className="text-red-500 hover:text-red-700"
        >
        X
        </button>
    </div>

    <div className="flex items-center justify-end">
        <button
        onClick={() => onDecrease(product)}
        className="text-gray-500 hover:text-gray-700"
        >
        -
        </button>
        <span className="mx-2">{product.quantity}</span>
        <button
        onClick={() => onIncrease(product)}
        className="text-gray-500 hover:text-gray-700"
        >
        +
        </button>
    </div>
    </div>
</div>
);
}
