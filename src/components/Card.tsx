
import Link from 'next/link';
import { Product } from '@/types';


interface CardProps {
    product: Product;
}

export default function Card({product}: CardProps){
    const titleLength = product.title.length;
    let title = titleLength > 30 ? product.title.slice(0, 30) + "..." : product.title;

    return (
        <Link href={`/products/${product.id}`}>
            <div
            className="bg-white border rounded-lg overflow-hidden shadow-md"
            role="card"
            >
            <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-center"
            />
            <div className="p-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                {title}
                </p>
                <div className="flex justify-between items-center">
                <span className="text-md font-bold text-gray-800">{`$${product.price}`}</span>
                </div>
            </div>
            </div>
        </Link>
    );
}