import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container';
import ProductList from '@/components/ui/product-list';
import getBillBoard from '@/services/get-billboard';
import getProducts from '@/services/get-products';

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillBoard(process.env.NEXT_PUBLIC_BILLBOARD_ID!);
  const products = await getProducts({ isFeatured: true });
  return (
    <div>
      <Billboard data={billboard} />
      <ProductList title="Featured Products" data={products} />
    </div>
  );
}
