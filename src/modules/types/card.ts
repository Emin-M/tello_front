export interface Subtotal {
  raw: number;
  formatted: string;
  formatted_with_symbol: string;
  formatted_with_code: string;
}

export interface Currency {
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
  subtotal: Subtotal;
  hosted_checkout_url: string;
  line_items: any[];
  currency: Currency;
  discount: any[];
  meta?: any;
}

export interface ICards {
  loading: boolean;
  // error: string;
  items: ICard[];
}
