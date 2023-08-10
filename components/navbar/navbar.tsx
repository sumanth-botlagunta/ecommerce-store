import Navlinks from '@/components/navbar/nav-links';
import getCategories from '@/services/get-categories';
import Link from 'next/link';
import CartButton from './cart-button';

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="flex justify-between h-12 items-center sticky z-30 top-1 mx-auto w-screen max-w-2xl border-[0.6px] border-blue-100 bg-black rounded-md backdrop:blur-md">
      <div className="flex items-center h-full">
        <p className="font-bold text-xl px-2">
          <Link href="/">Store</Link>
        </p>
        <Navlinks data={categories} />
      </div>
      <div className="flex items-center h-full">
        <CartButton />
      </div>
    </div>
  );
};

export default Navbar;
