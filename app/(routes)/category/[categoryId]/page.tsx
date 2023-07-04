import getCategory from '@/actions/get-category';
import getColors from '@/actions/get-colors';
import getProducts from '@/actions/get-products';
import getSizes from '@/actions/get-sizes';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import Filter from './components/Filter';
import NoResults from '@/components/ui/no-results';
import ProductCard from '@/components/ui/product-card';
import MobileFilters from './components/MobileFilters';

export const revalidate = 0;

interface CategoryProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const Categorypage: React.FC<CategoryProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white ">
      <Container>
        <Billboard data={category.billboard} />
      </Container>
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="lg:grid lg:grid-cols-5  lg:gap-x-8">
          <MobileFilters sizes={sizes} colors={colors} />
          <div className="hidden lg:block">
            <Filter valueKey="sizeId" data={sizes} name="Sizes" />
            <Filter valueKey="colorId" data={colors} name="Colors" />
          </div>
          <div className="mt-6 lg:col-span-4 lg:mt-0 ">
            {products.length === 0 && <NoResults />}
            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((prod) => (
                <ProductCard data={prod} key={prod.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorypage;
