import Billboard from '@/components/ui/billboard';
import Container from '@/components/ui/container';
import ProductList from '@/components/ui/product-list';
import getCategory from '@/services/get-category';
import getProducts from '@/services/get-products';

interface categoryPageProps {
  params: {
    categoryId: string;
  };
}

export const revalidate = 0;

const categoryPage: React.FC<categoryPageProps> = async ({ params }) => {
  const category = await getCategory(params.categoryId);
  const products = await getProducts({ categoryId: params.categoryId });
  return (
    <Container>
      <Billboard data={category.billboard} />
      <ProductList title={category.name} data={products} />
    </Container>
  );
};

export default categoryPage;
