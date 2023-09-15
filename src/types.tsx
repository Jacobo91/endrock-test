export interface Product {
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

export interface ProductPageProps {
    params: {
        id: string;
    };
}

export interface CardProps {
    product: Product;
}

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

