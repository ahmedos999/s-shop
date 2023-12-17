import Image from 'next/image'
import ad from '../public/ad.png'
import ProductsHeader from './components/products'
import Productlist from './components/productlist'

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-4 gap-4">
        <div className='border-e-2 w-full flex flex-col items-center'>
        <ul className='mt-10 text-lg'>
          <li>Women's fashion</li>
          <li>Men's fashion</li>
          <li>Elactronics</li>
          <li>Home & lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toy's</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
        </div>
        <div className="col-span-3 mt-10">
          <Image src={ad} alt='ad' height={220} quality={100} placeholder='blur'></Image>
        </div>
      </div>
      <div className='ml-28'>
      <ProductsHeader></ProductsHeader>
      <Productlist></Productlist>
      </div>
    </main>
  )
}
