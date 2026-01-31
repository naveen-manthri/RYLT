export interface SpecificationItem {
  label: string;
  value: string;
}

export interface ProductModel {
  name: string;
  specs: SpecificationItem[];
}

export interface Product {
  id: string;
  title: string;
  category: 'Heating' | 'Dehumidification';
  description: string;
  features: string[];
  applications: string[];
  image: string;
  models: ProductModel[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Customer {
  id: number;
  name: string;
  logo: string; // Using placeholder text or url
}
