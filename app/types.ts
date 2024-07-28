import type { Metadata } from "next";

export interface Place {
  name: string;
  slug: string;
  maps: string;
  instagram: string;
  categories: {
    food: boolean;
    drink: boolean;
    hotel: boolean;
  };
  images: {
    cover: string;
  };
  website: string;
  description: string;
  phone: string;
  email: string;
}

export interface Section {
  [key: string]: Metadata;
}
