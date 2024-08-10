import type { Metadata } from "next";

export interface Categories {
  food: boolean;
  wine: boolean;
  hotel: boolean;
}
export interface Place {
  name: string;
  slug: string;
  maps: string;
  instagram: string;
  categories: Categories;
  images: {
    cover: string;
  };
  website: string;
  description: {
    default: string;
    wine?: string;
  };
  phone: string;
  email: string;
}

export interface Section {
  [key: string]: Metadata;
}
