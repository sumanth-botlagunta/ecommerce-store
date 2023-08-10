import { Category } from '@/store';

const api_url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(api_url);
  return res.json();
};

export default getCategories;
