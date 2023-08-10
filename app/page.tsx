import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container';
import ProductList from '@/components/ui/product-list';
import getBillBoard from '@/services/get-billboard';
import getProducts from '@/services/get-products';

export const revalidate = 0;

export default async function Home() {
  const billboard = await getBillBoard('33218f97-210e-4b7e-a323-9320f8d4ebf2');
  const products = await getProducts({ isFeatured: true });
  return (
    <div>
      <Billboard data={billboard} />
      <ProductList title="Featured Products" data={products} />
    </div>
  );
}
