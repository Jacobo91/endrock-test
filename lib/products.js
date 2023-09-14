export async function getAllProducts(){
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error("error:", error)
    }
}

export async function get4Products(){
    try{
        const response = await fetch('https://fakestoreapi.com/products?limit=4');
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error("error:", error)
    }
}

export async function getProductById(id){
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        return data;
    }catch(error){
        throw new Error("error:", error)
    }
}