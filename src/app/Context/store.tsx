'use client';

import React, { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';


interface ProductType {
id: number;
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


interface ContextState {
cartProducts: ProductType[];
}


interface ContextActions {
setCartProducts: Dispatch<SetStateAction<ProductType[]>>;
}


interface ContextType extends ContextState, ContextActions {}


const GlobalContext = createContext<ContextType | undefined>(undefined);


export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [cartProducts, setCartProducts] = useState<ProductType[]>(() => {
        const storedCartProducts = window.localStorage.getItem('cartProducts');
        return storedCartProducts ? JSON.parse(storedCartProducts) : [];
    });
    

    React.useEffect(() => {
        window.localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

return (
<GlobalContext.Provider value={{ cartProducts, setCartProducts }}>
    {children}
</GlobalContext.Provider>
);
};


export const useGlobalContext = () => {
const context = useContext(GlobalContext);
if (context === undefined) {
throw new Error('useGlobalContext must be used within a GlobalContextProvider');
}
return context;
};
