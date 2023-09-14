import { Product } from "@/types";

export default function CartCard({product}: {
    product: Product
}) {
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
    <p className="text-gray-600">${product.price.toFixed(2)}</p>
    </div>
    <div className="w-1/4 text-right">
    <div className="flex items-center justify-end">
        <button
        // onClick={() => onDecrease(product.id)}
        className="text-gray-500 hover:text-gray-700"
        >
        -
        </button>
        <span className="mx-2">0</span>
        <button
        // onClick={() => onIncrease(product.id)}
        className="text-gray-500 hover:text-gray-700"
        >
        +
        </button>
    </div>
    <button
        // onClick={() => onRemove(product.id)}
        className="text-red-500 hover:text-red-700 mt-2"
    >
        Remove
    </button>
    </div>
</div>
);
}
