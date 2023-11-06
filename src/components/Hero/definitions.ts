export type SliderItemProps = {
  heroImg: string;
};

export type CarouselItemType = {
  backdrop: string;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: "For Sale" | "For Rent";
  price: number;
};

export interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export interface PropertyType {
  backdrop: string;
  title: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  status: "For Sale" | "For Rent";
  price: number;
}

export interface FeaturedPropertyType extends PropertyType {
  description: string;
}

export type ForRentPropertyType = FeaturedPropertyType;

export interface RecentPropertyType extends PropertyType {
  id: number;
  featured: boolean;
  hot: boolean;
  photos: number;
  videos: number;
  location: string;
  addedDate: string;
  agent: {
    name: string;
    type: string;
    photo: string;
  };
}

export type ForSalePropertyType = RecentPropertyType;
