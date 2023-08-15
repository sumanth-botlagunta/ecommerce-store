'use client';
import useCart from '@/hooks/use-cart';
import { Product } from '@/store';

interface ProductInfoProps {
  data: Product;
}
const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };
  return (
    <div className="px-5 my-auto flex flex-col gap-2 ml-4">
      <div className="flex justify-between gap-5 items-center max-w-md">
        <div className="text-2xl font-bold">{data.name}</div>
        <div className="text-3xl font-extrabold"> $ {data.price}</div>
      </div>
      <div className="flex gap-3 items-center m-2">
        <div className="font-bold">Color</div>
        <div
          className="w-9 h-9  rounded-full border-2 border-blue-500"
          style={{ backgroundColor: data.color.value }}
        ></div>
      </div>
      <div className="text-base m-2 p-1 outline outline-1 rounded-full flex items-center justify-center  max-w-[100px]">
        {data.size.value}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-white text-black font-bold text-lg px-5 py-2 w-full rounded-md max-w-xs"
          onClick={onAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
