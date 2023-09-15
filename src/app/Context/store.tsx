'use client';

import React, { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';
import { CartProduct } from '@/types';


interface ContextState {
cartProducts: CartProduct[];
cartOpen: boolean;
}


interface ContextActions {
setCartProducts: Dispatch<SetStateAction<CartProduct[]>>;
setCartOpen: Dispatch<SetStateAction<boolean>>;
}


interface ContextType extends ContextState, ContextActions {}


const GlobalContext = createContext<ContextType | undefined>(undefined);


export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [cartProducts, setCartProducts] = useState<CartProduct[]>(() => {
        const storedCartProducts = window.localStorage.getItem('cartProducts');
        return storedCartProducts ? JSON.parse(storedCartProducts) : [];
    });
    
    const [cartOpen, setCartOpen] = useState(false);

    React.useEffect(() => {
        window.localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

return (
<GlobalContext.Provider value={{ cartProducts, setCartProducts, cartOpen, setCartOpen }}>
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
