export interface ISubtotal {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface IPrice {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface ILineTotal {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface ILineItem {
  id: string;
  product_id: string;
  name: string;
  product_name: string;
  sku?: any;
  permalink: string;
  quantity: number;
  price: IPrice;
  line_total: ILineTotal;
  is_valid: boolean;
  product_meta: any[];
  selected_options: any[];
  variant?: any;
  image?: any;
}

export interface ICurrency {
  code: string;
  symbol: string;
}

export interface ICard {
  id: string;
  created: number;
  updated: number;
  expires: number;
  total_items: number;
  total_unique_items: number;
  subtotal: ISubtotal;
  hosted_checkout_url: string;
  line_items: ILineItem[];
  currency: ICurrency;
  discount: any[];
  meta?: any;
}

export interface ICards {
  loading: boolean;
  // error: string;
  items: ICard | null;
}
