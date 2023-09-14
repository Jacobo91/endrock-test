'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
const pathname = usePathname()

return (
<footer className="bg-white text-black p-10 mt-10 border-t border-grey-100">
    <div className="container mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <section>
        <h2 className="text-xl font-semibold mb-2">My Shop</h2>
        <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minus.
        </p>
        </section>

        <section>
        <h2 className="text-xl font-semibold mb-2">Connect</h2>
        <ul className="text-2xl leading-10 flex gap-5">
            <li>
            <Link href="https://www.facebook.com/middleearthapp" target='_blank'>
                <i className="fa-brands fa-facebook"></i>
            </Link>
            </li>
            <li>
            <Link href="https://www.instagram.com/middleearthapp" target='_blank'>
                <i className="fa-brands fa-instagram"></i>
            </Link>
            </li>
        </ul>
        </section>
    </div>
    </div>
</footer>
);
}
