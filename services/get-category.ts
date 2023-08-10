import { Category } from '@/store';

const api_url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (CategoryId: string): Promise<Category> => {
  const res = await fetch(`${api_url}/${CategoryId}`);
  return res.json();
};

export default getCategory;
