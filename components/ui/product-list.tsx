'use client';
import { Product } from '@/store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProductListProps {
  title: string;
  data: Product[];
}



const ProductList: React.FC<ProductListProps> = ({ title, data }) => {
  const router = useRouter();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product.id} className=" hover:cursor-pointer">
              <Link href={`/product/${product.id}`}>
                <div className="aspect-square rounded-xl bg-gray-100 relative">
                  <Image
                    fill
                    src={product.images[0].url}
                    alt={product.name}
                    className="aspect-square object-cover rounded-md"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm ">{product.color.name}</p>
                  </div>
                  <p className="text-base font-medium">$ {product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
