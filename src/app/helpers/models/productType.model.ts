import { User } from './user.model';

export class ProductType {
  created_by: User;
  created_at: Date;
  code: string;
  product_type: string;
}