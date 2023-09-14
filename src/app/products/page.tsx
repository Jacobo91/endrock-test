import Main from '../../components/Main';
import Card from '../../components/Card';
import Gallery from '@/components/Gallery';
import { getAllProducts } from '../../../lib/products'
import { Product } from '@/types';


export default async function Products(){
    const data = await getAllProducts();
return(
    <Main>
        <section className="mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Products</h2>

        <Gallery>
            {
                data.map((product: Product) => (
                    <Card product={product} key={product.id}/>
                ))
            }
        </Gallery>

        </section>
    </Main>
    )
}