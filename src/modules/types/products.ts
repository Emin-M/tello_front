export interface Price {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface Inventory {
  managed: boolean;
  available: number;
}

export interface Seo {
  title?: any;
  description?: any;
}

export interface Conditionals {
  is_active: boolean;
  is_tax_exempt: boolean;
  is_pay_what_you_want: boolean;
  is_inventory_managed: boolean;
  is_sold_out: boolean;
  has_digital_delivery: boolean;
  has_physical_delivery: boolean;
  has_images: boolean;
  collects_fullname: boolean;
  collects_shipping_address: boolean;
  collects_billing_address: boolean;
  collects_extra_fields: boolean;
}

export interface Is {
  active: boolean;
  tax_exempt: boolean;
  pay_what_you_want: boolean;
  inventory_managed: boolean;
  sold_out: boolean;
}

export interface Has {
  digital_delivery: boolean;
  physical_delivery: boolean;
  images: boolean;
}

export interface Collects {
  fullname: boolean;
  shipping_address: boolean;
  billing_address: boolean;
  extra_fields: boolean;
}

export interface CheckoutUrl {
  checkout: string;
  display: string;
}

export interface ExtraField {
  id: string;
  name: string;
  type: string;
  required: boolean;
  options?: any;
  meta?: any;
  created: number;
  updated: number;
}

export interface IProduct {
  id: string;
  created: number;
  updated: number;
  active: boolean;
  permalink: string;
  name: string;
  description: string;
  price: Price;
  inventory: Inventory;
  sku: string;
  sort_order: number;
  seo: Seo;
  thank_you_url?: any;
  meta?: any;
  conditionals: Conditionals;
  is: Is;
  has: Has;
  collects: Collects;
  checkout_url: CheckoutUrl;
  extra_fields: ExtraField[];
  variant_groups: any[];
  categories: IProduct[];
  assets: any[];
  image?: any;
  related_products: any[];
  attributes: any[];
}

export interface IProducts {
  loading: boolean;
  // error: string;
  products: IProduct[];
}
