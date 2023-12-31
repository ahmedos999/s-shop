import Image from 'next/image'
import ad from '../public/ad.png'
import Header from './components/header'
import Productlist from './components/productlist'
import Categories from './components/categories'


export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className='border-e-2 w-full flex flex-col items-center col-span-3'>
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
        <div className="col-span-8 mt-10">
          <Image src={ad} alt='ad' quality={100} placeholder='blur' ></Image>
        </div>
      </div>
      <div className='ml-28'>
      <Header title="Today's" subtitle='Flash Sales' timer='03:23:19:56'></Header>
      <Productlist></Productlist>
      <Header title="This Month" subtitle='Best Salling Products'></Header>
      <Productlist></Productlist>
      <Header title="Categories" subtitle='Browse By Category'></Header>
      <Categories></Categories>
      </div>
    </main>
  )
}
