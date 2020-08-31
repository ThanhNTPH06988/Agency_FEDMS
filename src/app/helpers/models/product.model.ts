import { ProductUnitType } from './productUnitType.model';
import { ProductType } from './productType.model';

export class Product {
  created_by: string
  created_at: number
  product_unit_type: ProductUnitType;
  product_type: ProductType;
  code: string;
  weight: number;
  width: number;
  height: number;
  current_price: number;
  base_price: number;
  available_quantity: number;
  min_reserve_quantity: number;
}
