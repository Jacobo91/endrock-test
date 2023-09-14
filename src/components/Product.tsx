'use client'

import { Product } from "@/types";
import Button from "./Button";
import { useEffect } from "react";
import { useGlobalContext } from "@/app/Context/store";

interface CardProps {
    product: Product;
}

export default function SingleProduct({product}: CardProps){

    const { cartProducts, setCartProducts, setCartOpen } = useGlobalContext()

    function addProduct(productToAdd: Product) {
    const productIndex = cartProducts.findIndex((product) => product.id === productToAdd.id);
    
    if (productIndex === -1) {
        const updatedProductToAdd = { ...productToAdd, quantity: 1 };
        const updatedCartProducts = [...cartProducts, updatedProductToAdd];
        setCartProducts(updatedCartProducts);
        setCartOpen(true)
        } 
    }

    useEffect(() => { console.log(cartProducts) })

    return (
    <div className="max-w-screen-xl mx-auto p-6 my-10 sm:my-20 sm:p-8">
    <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
        <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-center"
        />
        </div>
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
            {product.title}
        </h1>
        <p className="text-lg text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl text-gray-800 mb-4">${product.price}</p>
        <Button 
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            handleClick={() => addProduct(product)}
        >
            Add to Cart
        </Button>
        </div>
    </div>
    </div>
    );
}