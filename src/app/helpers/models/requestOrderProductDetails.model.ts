import { Product } from './product.model';

export class RequestOrderProductDetails {
  created_by: string;
  created_at: string;
  product: Product;
  neogotiated_price: number;
  amount: number;
}
