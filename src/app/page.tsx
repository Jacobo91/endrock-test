

import Image from 'next/image';
import wallpaper from '../../public/bannerBig.png';
import Main from '../components/Main';
import Link from 'next/link';
import Gallery from '../components/Gallery';
import Card from '../components/Card';
import { get4Products } from '../../lib/products';
import { Product } from '@/types';

export default  async function Home() {
  const data = await get4Products();
  return (
    <>
      <header role="banner" className="relative flex flex-col justify-end">
        <div role="img" aria-label="banner image">
          
            <Image src={wallpaper} alt="banner image" className="w-full h-full" priority/>
          
        </div>
        <div className="absolute bottom-3 sm:bottom-10 flex justify-center w-full">
          <Link href="/products" className="p-2 sm:p-4 bg-black text-white rounded-md">Shop All</Link>
        </div>
      </header>

      <Main>
        <section role='featured products'>
          <h2 className='text-lg sm:text-2xl mb-4'>
            Featured products
          </h2>
          <Gallery>
            {
              data.map((product: Product) => (
                <Card product={product} key={product.id} />
              ))
            }
          </Gallery>
        </section>

        <section role='about' className='mt-10 mb-20'>
            <h2 className='text-3xl mb-4 text-center' >
              Who we are ?
            </h2>
            <p className='text-center' >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sequi explicabo nobis sed omnis fuga vel nihil, maiores iusto itaque ratione qui facilis est minima repellat fugiat deserunt id repudiandae? Nam reprehenderit quod praesentium. Debitis ducimus ipsa maiores velit molestias?
            </p>
        </section>
      </Main>
    </>
  )
}
