import Container from '@/components/ui/container';
import ImageGallery from '@/components/ui/image-gallery';
import ProductInfo from '@/components/ui/product-info';
import ProductList from '@/components/ui/product-list';
import getProduct from '@/services/get-product';
import getProducts from '@/services/get-products';

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 0;

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  const suggestedProductsFiltered = suggestedProducts?.filter(
    (p) => p.id !== product.id
  );

  return (
    <Container>
      <div className="flex flex-col lg:flex-row lg:gap-8 justify-center">
        <ImageGallery data={product.images} />
        <ProductInfo data={product} />
      </div>
      {suggestedProductsFiltered?.length > 0 && (
        <ProductList
          data={suggestedProductsFiltered}
          title="Suggested Products"
        />
      )}
    </Container>
  );
};

export default ProductPage;
