import Image from 'next/image'
import ad from '../public/ad.png'
import Header from './components/header'
import Productlist from './components/productlist'
import Categories from './components/categories'
import Footer from './components/footer'
import { HiOutlineArrowSmRight } from "react-icons/hi";


export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className='border-e-2 w-full flex flex-col col-span-3'>
        <ul className='mt-10 text-lg mx-auto p-2'>
          <li className='flex items-center group '><HiOutlineArrowSmRight className='invisible  group-hover:visible '/><p className='group-hover:ml-2'></p>Women's fashion</li>
          <li className='flex items-center group '><HiOutlineArrowSmRight className='invisible  group-hover:visible '/><p className='group-hover:ml-2'>Men's fashion</p></li>
          <li className='flex items-center group '><HiOutlineArrowSmRight className='invisible  group-hover:visible '/><p className='group-hover:ml-2'>Elactronics</p></li>
          <li className='flex items-center group '><HiOutlineArrowSmRight className='invisible  group-hover:visible '/><p className='group-hover:ml-2'>Home & lifestyle</p></li>
          <li className='flex items-center group '><HiOutlineArrowSmRight className='invisible  group-hover:visible '/><p className='group-hover:ml-2'>Medicine</p></li>
          <li className='flex items-center group '><HiOutlineArrowSmRight className='invisible  group-hover:visible '/><p className='group-hover:ml-2'>Sports & Outdoor</p></li>
          <li className='flex items-center group '><HiOutlineArrowSmRight className='invisible  group-hover:visible '/><p className='group-hover:ml-2'>Baby's & Toy's</p></li>
          <li className='flex items-center group '><HiOutlineArrowSmRight className='invisible  group-hover:visible '/><p className='group-hover:ml-2'>Groceries & Pets</p></li>
          <li className='flex items-center group '><HiOutlineArrowSmRight className='invisible  group-hover:visible '/><p className='group-hover:ml-2'>Health & Beauty</p></li>
        </ul>
        </div>
        <div className="col-span-8 mt-10">
          <Image src={ad} alt='ad' quality={100} placeholder='blur'></Image>
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
      <Footer></Footer>
    </main>
  )
}
