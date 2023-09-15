import { getProductById } from "../../../../lib/products"
import SingleProduct from "../../../components/Product";
import { ProductPageProps } from "@/types";



export default async function Product({params}: ProductPageProps){
    const { id } = params;
    const data = await getProductById(id);
    return(
        <>
            <SingleProduct product={data} />
        </>
    )
}