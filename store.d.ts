export interface BillBoard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: BillBoard;
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  isFeatured: boolean;
  category: Category;
  images: Image[];
  size: Size;
  color: Color;
}
