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
