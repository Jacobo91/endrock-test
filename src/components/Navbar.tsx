'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import Cart from './Cart';
import { useGlobalContext } from '@/app/Context/store';

export default function Navbar() {

const [open, setOpen] = useState(false);
const [width, setWidth] = useState(window.innerWidth);
const pathname = usePathname();

const { cartOpen, setCartOpen } = useGlobalContext();

function toggleMenu(){
    setOpen((prev) => !prev)
}

function toggleCart(){
    setCartOpen((prev) => !prev)
}

useEffect(() => {
const handleResize = (): void => {
    setWidth(window.innerWidth);
};

window.addEventListener('resize', handleResize);

return () => {
    window.removeEventListener('resize', handleResize);
};
}, []);


return (
    <nav className="relative flex bg-white justify-between h-20 px-5 sm:justify-between sticky top-0 z-20 items-center border-b border-grey-100">
    {width > 640 ? (
        <>
        <h3 className='z-20' >My Shop</h3>
        <Button
            className="z-10 sm:hidden text-black"
            handleClick={toggleMenu}
        >
            {open ? (
            <i className="fa-solid fa-xmark"></i>
            ) : (
            <i className="fa-solid fa-bars"></i>
            )}
        </Button>
        <ul
            className={`bg-white absolute  left-0 text-black top-0 p-5 py-20 leading-10 w-60 h-screen ${
            open ? "visible" : "hidden"
            } sm:block sm:relative sm:h-auto sm:flex sm:w-auto sm:gap-4 sm:py-0`}
        >
            <li>
            <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`${
                pathname === "/" ? "border-b border-black" : "border-b-none"
                }`}
            >
                Home
            </Link>
            </li>
            <li>
            <Link
                href="/products"
                onClick={() => setOpen(false)}
                className={`${
                pathname === "/products"
                    ? "border-b border-black"
                    : "border-b-none"
                }`}
            >
                Products
            </Link>
            </li>
        </ul>
        <Button handleClick={toggleCart}>
            <i className="fa-solid fa-cart-shopping"></i>
        </Button>

        <Cart/>
        </>
    ) : (
        <>
        <Button
            className="z-10 sm:hidden text-black"
            handleClick={toggleMenu}
        >
            {open ? (
            <i className="fa-solid fa-xmark"></i>
            ) : (
            <i className="fa-solid fa-bars"></i>
            )}
        </Button>
        <ul
            className={`bg-white absolute  left-0 text-black top-0 p-5 py-20 leading-10 w-60 h-screen ${
            open ? "visible" : "hidden"
            } 
                            sm:block sm:relative sm:h-auto sm:flex sm:w-auto sm:gap-4 sm:py-0`}
        >
            <li>
            <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`${
                pathname === "/" ? "border-b border-black" : "border-b-none"
                }`}
            >
                Home
            </Link>
            </li>
            <li>
            <Link
                href="/products"
                onClick={() => setOpen(false)}
                className={`${
                pathname === "/products"
                    ? "border-b border-black"
                    : "border-b-none"
                }`}
            >
                Products
            </Link>
            </li>
        </ul>
        <h3 className='z-20'>My Shop</h3>
        <Button handleClick={toggleCart}>
            <i className="fa-solid fa-cart-shopping"></i>
        </Button>

        <Cart/>
        </>
    )}
    </nav>
);
}